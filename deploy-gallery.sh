# Remove Project code files "except overrides" directory
find ./lighthouse-gallery.framerfx/code/* -maxdepth 0 -name 'overrides' -prune -o -exec rm -rf '{}' ';'

# String find & replace (component files)
find ./lighthouse-gallery.framerfx -type f -exec sed -i "" 's/..\/..\/..\/..\/lighthouse/@harborschool\/lighthouse/g' {} \;
find ./lighthouse-gallery.framerfx -type f -exec sed -i "" 's/..\/..\/..\/lighthouse/@harborschool\/lighthouse/g' {} \;
find ./lighthouse-gallery.framerfx -type f -exec sed -i "" 's/from "..\/utils/from "@framer\/ruucm-h.lighthouse\/code\/utils/g' {} \;
# String find & replace (document.json)
find ./lighthouse-gallery.framerfx -type f -exec sed -i "" 's/"codeComponentIdentifier" : "./"codeComponentIdentifier" : "@framer\/ruucm-h.lighthouse\/./g' {} \;
# String find & replace (package.json)
find ./lighthouse-gallery.framerfx -type f -exec sed -i "" 's/"name": "@framer\/ruucm-h.lighthouse",//g' {} \;
find ./lighthouse-gallery.framerfx -type f -exec sed -i "" 's/"dependencies": {/"dependencies": {\
    "@harborschool\/lighthouse": "latest",/g' {} \;


#TODO
# Install @framer/ruucm-h.lighthouse
# Remove scaleChip (Project Component)
# Save it as .framerx project
# Upload lighthouse-gallery.framerx to Framer Web