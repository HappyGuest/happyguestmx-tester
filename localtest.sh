#!/bin/bash

Color_Off="$(printf '\033[0m')" #returns to "normal"
BBlue="$(printf '\e[1;36m')" #set green
BGreen="$(printf '\e[1;32m')" #set green
BRed="$(printf '\033[0;31m')" #set red
BASEDIR=$(dirname "$0")

pInfo() {
  echo "${BBlue}$1${Color_Off}"
}

pError() {
  echo "${BRed}$1${Color_Off}"
}

pSuccess() {
  echo "${BGreen}$1${Color_Off}"
}

pInfo ">> getting env"
env=$1

#setting default env if env is empty
if [ -z "$env" ] 
then
    env="dev"
fi

pInfo ">> linking global packages lambda-local and aws-sdk"
npm link lambda-local
npm link aws-sdk

pInfo ">> testing function"
node "$BASEDIR/index.js" $env