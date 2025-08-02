if test -f /home/coglab/miniconda3/bin/node; then
 /home/coglab/miniconda3/bin/node --trace-uncaught make.js $@
else
 node --trace-uncaught make.js $@
fi
