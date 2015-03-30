#!/bin/bash

sudo npm cache clean
sudonpm install --global yo bower grunt-cli
sudo npm cache clean
sudo npm install 
bower install