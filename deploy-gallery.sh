# Duplicate Gallery
cp -r lighthouse-gallery.framerfx lighthouse-gallery-deploy.framerfx

# Remove Project code files "except overrides" directory
find ./lighthouse-gallery-deploy.framerfx/code/* -maxdepth 0 -name 'overrides' -prune -o -exec rm -rf '{}' ';'

# String find & replace (component files)
find ./lighthouse-gallery-deploy.framerfx -type f -exec sed -i "" 's/..\/..\/..\/..\/lighthouse/@harborschool\/lighthouse/g' {} \;
find ./lighthouse-gallery-deploy.framerfx -type f -exec sed -i "" 's/..\/..\/..\/lighthouse/@harborschool\/lighthouse/g' {} \;
find ./lighthouse-gallery-deploy.framerfx -type f -exec sed -i "" 's/from "..\/utils/from "@framer\/ruucm-h.lighthouse\/code\/utils/g' {} \;
# String find & replace (document.json)
find ./lighthouse-gallery-deploy.framerfx -type f -exec sed -i "" 's/"codeComponentIdentifier" : "./"codeComponentIdentifier" : "@framer\/ruucm-h.lighthouse\/./g' {} \;
# String find & replace (package.json)
find ./lighthouse-gallery-deploy.framerfx -type f -exec sed -i "" 's/"name": "@framer\/ruucm-h.lighthouse",//g' {} \;
find ./lighthouse-gallery-deploy.framerfx -type f -exec sed -i "" 's/"dependencies": {/"dependencies": {\
    "@harborschool\/lighthouse": "latest",/g' {} \;

# Open Framer
open lighthouse-gallery-deploy.framerfx

#TODO
# Install @framer/ruucm-h.lighthouse (Framer Package)
# Remove scaleChip (Project Component)
# Save it as .framerx project
# Upload lighthouse-gallery-deploy.framerx to Framer Web