import os
import glob
from PIL import Image

# Parameters
small_size = (64, 64)
output_size = (256, 256)
colors = 256

# Supported extensions
extensions = ['*.jpg', '*.jpeg', '*.png', '*.webp', '*.bmp', '*.tiff', '*.gif']

# Get all image files in current directory
image_files = []
for ext in extensions:
    image_files.extend(glob.glob(ext))

if not image_files:
    print("No image files found in the directory.")
else:
    for file_path in image_files:
        try:
            # Open image
            img = Image.open(file_path)
            
            # Resize to small size using nearest neighbor
            img_small = img.resize(small_size, Image.NEAREST)
            
            # Quantize to specified colors
            img_small = img_small.quantize(colors=colors)
            
            # Resize back to output size
            img_final = img_small.resize(output_size, Image.NEAREST)
            
            # Save as new file in original format
            base_name, ext = os.path.splitext(file_path)
            output_path = f"{base_name}_processed{ext}"
            img_final.save(output_path)
            print(f"Processed {file_path} -> {output_path}")
        except Exception as e:
            print(f"Error processing {file_path}: {e}")