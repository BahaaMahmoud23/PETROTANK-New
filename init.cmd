call npx -y create-next-app@latest temp_app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes
cd temp_app
call npm install framer-motion lucide-react clsx tailwind-merge
move * ..\
move .* ..\
cd ..
rmdir temp_app
