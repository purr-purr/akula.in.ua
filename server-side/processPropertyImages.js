import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

const sourceDirectory = 'public/assets/property/source';
const outputDirectory = 'public/assets/property/production';
const watermarkPath = 'public/assets/watermark.png';

const processPropertyFiles = (directory) => {
	const files = fs.readdirSync(directory);
	
	for (const file of files) {
		const filePath = path.join(directory, file);
		const isDirectory = fs.statSync(filePath).isDirectory();
		
		if (isDirectory) {
			processPropertyFiles(filePath);
		} else if (isImageFile(filePath)) {
			processEachImageFile(filePath).then();
		} else {
			transferNotProcessingFiles(filePath);
		}
	}
};

const isImageFile = (filePath) => {
	const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
	const fileName = path.extname(filePath).toLowerCase();
	return allowedExtensions.includes(fileName);
};

const transferNotProcessingFiles = (filePath) => {
	const relativePath = path.relative(sourceDirectory, filePath);
	const outputPath = path.join(outputDirectory, relativePath);
	
	fs.mkdir(path.dirname(outputPath), {recursive: true}, (err) => {
		if (err) {
			console.error(`Error: ${err}`);
			return;
		}
		
		fs.readFile(filePath, (err, data) => {
			if (err) {
				console.error(`Error reading source file: ${err}`);
				return;
			}
			
			fs.writeFile(outputPath, data, (err) => {
				if (err) {
					console.error(`Error writing to destination file: ${err}`);
					return;
				}
				
				console.log(`Skipped file moved successfully!: ${outputPath}`);
			});
		})
	})
}

const processEachImageFile = async (filePath) => {
	const relativePath = path.relative(sourceDirectory, filePath);
	const outputPath = path.join(outputDirectory, relativePath);
	const outputDir = path.dirname(outputPath);
	
	const sourceImage = sharp(filePath);
	const sourceImageMetadata = await sourceImage.metadata();
	const sourceImageWidth = sourceImageMetadata.width;
	
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, {recursive: true});
	}
	
	const watermarkImageWidth = sourceImageWidth
		? Math.round(sourceImageWidth / 5)
		: 150;
	
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
	console.log(`Image edited successfully!: ${outputPath}`);
};

processPropertyFiles(sourceDirectory);