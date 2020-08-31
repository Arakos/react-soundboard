aws s3 rm s3://soundboard-sounddata/ --recursive
aws s3 cp soundserver/sounds/ s3://soundboard-sounddata/sounds/ --recursive
