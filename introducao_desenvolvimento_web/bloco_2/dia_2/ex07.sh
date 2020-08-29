#!/bin/bash
#"Vou ter muito sucesso na programação!"
WAY=$1
echo $WAY

if [ -d $WAY ]
    then
        TOTAL=`ls -la $WAY | grep -e "^-" -c`
        echo "O $WAY tem $TOTAL arquivos"
    else 
        echo "$WAY não é um diretório"    
fi

#/home/alexandre/Cursos/Trybe/shellScript/teste.sh