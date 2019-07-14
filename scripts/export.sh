npm run build ./app \
  && npm run export ./app \
  && touch ./app/out/.nojekyll \
  && rm -fR docs \
  && mv ./app/out docs