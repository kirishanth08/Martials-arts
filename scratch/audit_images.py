import os, hashlib, glob, re

html_files = glob.glob('*.html')
img_usages = {}
for h in html_files:
    with open(h, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    imgs = re.findall(r'(?:src|poster)=[\'"]([^\'"]*assets/images/[^\'"]+)[\'"]', content)
    # Also check background-image url in style attributes or inline styles
    imgs += re.findall(r'url\([\'"]?([^\'")]+assets/images/[^\'"]+)[\'"]?\)', content)
    for img in imgs:
        img_clean = img.replace('../', '').replace('./', '').split('?')[0].strip()
        img_usages.setdefault(img_clean, []).append(h)

print(f"Total HTML image references: {sum(len(v) for v in img_usages.values())}")
print(f"Distinct image paths referenced: {len(img_usages)}")

# Check duplicate paths across multiple pages
reused_paths = {k: v for k, v in img_usages.items() if len(v) > 1}
print(f"Image paths used in MORE THAN ONE place: {len(reused_paths)}")
for p, pages in reused_paths.items():
    print(f"  Path '{p}' used in: {pages}")

# Check content hashes
hashes = {}
for img_rel in img_usages.keys():
    if os.path.exists(img_rel):
        with open(img_rel, 'rb') as f:
            h = hashlib.md5(f.read()).hexdigest()
        hashes.setdefault(h, []).append(img_rel)
    else:
        print(f"Missing file: {img_rel}")

duplicates = {k: v for k, v in hashes.items() if len(v) > 1}
print(f"\nDuplicate binary content groups across all references: {len(duplicates)}")
for h, files in duplicates.items():
    print(f"Group of identical files ({len(files)}):")
    for f in files:
        print(f"   - {f} (used in {img_usages.get(f)})")
