#!/bin/bash

ROTATE=${2:-0}
echo "Optimizing $1.."
echo "Running: ffmpeg -i $1 -an -c:v libx264 -vf "scale=600:-2" -metadata:s:v:0 rotate=$ROTATE -pix_fmt yuv420p -movflags faststart $1"
echo -e "\n"

ffmpeg -i $1 -an -c:v libx264 -metadata:s:v:0 rotate=$ROTATE -vf "scale=600:-2" -pix_fmt yuv420p -movflags faststart "new-$1"

echo -e "\nDone."
