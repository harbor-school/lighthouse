# Duplicate Gallery
read -p "Target Project (.framerfx): " project

rm -rf deploy.framerfx
cp -r $project.framerfx deploy.framerfx

# Remove Project code files "except overrides" directory
find ./deploy.framerfx/code/* -maxdepth 0 -name 'overrides' -prune -o -exec rm -rf '{}' ';'

# String find & replace (component files)
find ./deploy.framerfx -type f -exec sed -i "" 's/..\/..\/..\/..\/lighthouse/@harborschool\/lighthouse/g' {} \;
find ./deploy.framerfx -type f -exec sed -i "" 's/..\/..\/..\/lighthouse/@harborschool\/lighthouse/g' {} \;
find ./deploy.framerfx -type f -exec sed -i "" 's/from "..\/utils/from "@framer\/ruucm-h.lighthouse\/code\/utils/g' {} \;
# String find & replace (document.json)
find ./deploy.framerfx -type f -exec sed -i "" 's/"codeComponentIdentifier" : "\./"codeComponentIdentifier" : "@framer\/ruucm-h.lighthouse\/./g' {} \;
# String find & replace (package.json)
find ./deploy.framerfx -type f -exec sed -i "" 's/"name": "@framer\/ruucm-h.lighthouse",//g' {} \;
find ./deploy.framerfx -type f -exec sed -i "" 's/"dependencies": {/"dependencies": {\
    "@harborschool\/lighthouse": "latest",/g' {} \;

# Open Framer
open deploy.framerfx

#TODO
# Install @framer/ruucm-h.lighthouse (Framer Package)
# Remove scaleChip (Project Component)
# Save it as .framerx project
# Upload deploy.framerx to Framer Web