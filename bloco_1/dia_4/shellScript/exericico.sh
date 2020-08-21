#!/bin/bash
echo "Qual seu nome: "
read NAME

echo "Quanto anos você tem: "
read AGE

USER=`whoami`

DIRECTORY=`pwd`

echo "Meu nome é " $NAME "tenho" $AGE "anos"
echo "O usuário atual do sistema é: " $USER
echo "Nosso diretório atual é " $DIRECTORY

#read -p "Qual o seu nome?" NOME - outra dica para digitar direto na mesma linha