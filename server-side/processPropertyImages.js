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
	const watermarkImage = sharp(watermarkPath);
	const watermarkImageWidth = sourceImageMetadata.width
		? Math.round(sourceImageMetadata.width / 5)
		: 150;
	
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, {recursive: true});
	}
	
	watermarkImage.ensureAlpha(0.5).resize({
		width: watermarkImageWidth,
		fit: sharp.fit.contain,
	});
	
	await sourceImage
	.rotate()
	.composite([
		{
			input: await watermarkImage.toBuffer(),
			gravity: 'center',
		},
	])
	.toFormat('jpeg')
	.toFile(outputPath)
	.catch((err) => {
		console.error(`Error compressing ${filePath}: ${err.message}`);
	});
	console.log(`Image edited: ${outputPath}`);
};

const processPropertyImages = () => {
	imagesInDirectory(inputDirectory);
};

export default processPropertyImages;
