import re
import json

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all string literals longer than 10 characters
strings = re.findall(r'["\'](.*?)["\']', content)
valid_strings = [s for s in strings if len(s) > 15 and "function" not in s and "return" not in s and "{" not in s and "/" not in s and "\\" not in s]

# Filter out common JS code artifacts and keep unique strings
unique_strings = list(set(valid_strings))

print(json.dumps(unique_strings[:100], indent=2))
