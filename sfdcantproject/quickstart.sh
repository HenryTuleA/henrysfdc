#!/bin/bash

mkdir -p force/src resources
ant setup -Drun=setup -DsetupOption=1 -DlocalSrcPath=force/src -DlocalResourcePath=resources

ant newPackage
ant addDocMetadata
ant resetRefresh


