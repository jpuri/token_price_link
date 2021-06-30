git checkout master
git checkout -b tmp-gh-pages
rm .gitignore

cd client
npm run build
touch index.php
echo "<?php header( 'Location: /index.html' ) ;  ?>" >> index.php
cd ..

git commit -am 'deploying docs'

git subtree split --prefix client/build -b gh-pages
git checkout gh-pages
git push -f heroku gh-pages:master

git checkout master
git branch -D tmp-gh-pages
git branch -D gh-pages