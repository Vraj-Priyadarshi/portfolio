import os
import glob
from PIL import Image
import sys

def convert_to_webp(folder_path):
    extensions = ['*.png', '*.jpg', '*.jpeg', '*/*.png', '*/*.jpg', '*/*.jpeg']
    files_to_convert = []
    
    for ext in extensions:
        files_to_convert.extend(glob.glob(os.path.join(folder_path, ext), recursive=True))
        
    for file_path in files_to_convert:
        if file_path.endswith('.webp'): continue
        filename, _ = os.path.splitext(file_path)
        new_path = filename + '.webp'
        
        try:
            with Image.open(file_path) as img:
                img.save(new_path, 'webp', optimize=True, quality=85)
            print(f'Converted: {file_path} -> {new_path}')
        except Exception as e:
            print(f'Failed to convert {file_path}: {e}')

if __name__ == '__main__':
    public_dir = os.path.join(os.getcwd(), 'public')
    convert_to_webp(public_dir)
