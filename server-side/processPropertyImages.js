import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

const inputDirectory = 'public/assets/property/source';
const outputDirectory = 'public/assets/property/production';
const watermarkPath = 'public/assets/watermark.png';

const imagesInDirectory = (directory) => {
	const files = fs.readdirSync(directory);
	
	for (const file of files) {
		const filePath = path.join(directory, file);
		
		if (fs.statSync(filePath).isDirectory()) {
			imagesInDirectory(filePath);
		} else if (isImageFile(filePath)) {
			compressAndSaveImage(filePath).then();
		} else {
			//TODO Not finished moving not images files with saving folder structure
			// const destinationPath = filePath.replace('source', 'production');
			const name = path.basename(filePath);
			const folder = outputDirectory + '/' + 'test/';
			const folderWithName = folder + name;
			
			fs.mkdir(folder, {recursive: true}, (err) => {
				if (err) {
					console.error(`Error: ${err}`);
					return;
				}
				
				fs.readFile(filePath, (err, data) => {
					if (err) {
						console.error(`Error reading source file: ${err}`);
						return;
					}
					
					fs.writeFile(folderWithName, data, (err) => {
						if (err) {
							console.error(`Error writing to destination file: ${err}`);
							return;
						}
						
						console.log('File moved successfully!');
					});
				})
			})
		}
	}
};

const isImageFile = (filePath) => {
	const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
	const extname = path.extname(filePath).toLowerCase();
	return allowedExtensions.includes(extname);
};

const compressAndSaveImage = async (filePath) => {
	const relativePath = path.relative(inputDirectory, filePath);
	const outputPath = path.join(outputDirectory, relativePath);
	const outputDir = path.dirname(outputPath);
	
	const sourceImage = sharp(filePath);
	const sourceImageMetadata = await sourceImage.metadata();
	const sourceImageWidth = sourceImageMetadata.width;
	
	const watermarkImageWidth = sourceImageWidth
		? Math.round(sourceImageWidth / 5)
		: 150;
	
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, {recursive: true});
	}
	
	const watermarkImage = sharp(watermarkPath)
	.resize({
		width: watermarkImageWidth,
		fit: sharp.fit.contain,
	});
	
	await sourceImage
	.withMetadata()
	.rotate()
	.composite([
		{
			input: await watermarkImage.toBuffer(),
			gravity: 'center',
		},
	])
	.toFile(outputPath)
	.catch((err) => {
		console.error(`Error editing ${filePath}: ${err.message}`);
	});
	console.log(`Image edited: ${outputPath}`);
};

const processPropertyImages = () => {
	imagesInDirectory(inputDirectory);
};

export default processPropertyImages;
