import os
import glob
import re

def update_jsx_extensions(folder_path):
    jsx_files = glob.glob(os.path.join(folder_path, '**', '*.jsx'), recursive=True)
    
    for file_path in jsx_files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Replace image extensions with .webp
        # Be careful not to replace external URLs, though they probably use http
        new_content = re.sub(r'(\.png|\.jpg|\.jpeg)', '.webp', content, flags=re.IGNORECASE)
        
        if content != new_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f'Updated references in {file_path}')

if __name__ == '__main__':
    src_dir = os.path.join(os.getcwd(), 'src')
    update_jsx_extensions(src_dir)
