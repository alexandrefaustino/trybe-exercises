#!/bin/bash
WAY="/home/alexandre/Cursos/Trybe/shellScript/teste.sh"

if [ -e $WAY ]
  then
      echo "O Caminho $WAY está habilitdo!"
      if [ -w $WAY ]
          then 
              echo "Você tem permissão para editar $WAY"
          else 
              echo "Você não foi autorizado a editar $WAY"
      fi
else
  echo "O Caminho não está habilitado!"
fi