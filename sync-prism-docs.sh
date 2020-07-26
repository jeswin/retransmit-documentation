# Copy docs from Prism Docs
rm -rf docs/prism
cp -r ../prism-docs/docs docs/prism

# Start watching
bashocmd=$(cat <<"EOF"
-j
  x.split(" ")
-j 
  (
    x[1] === "MODIFY" || x[1] === "CREATE" 
      ? `cp ${x[0]}${x[2]} docs/prism/${x[2]}`
      : x[1] === "DELETE" 
        ? `rm docs/prism/${x[2]}` 
        : undefined
  )
-f 
  x !== undefined
EOF
)

while true; do
  (inotifywait -e create -e delete -e modify  -r ../prism-docs/docs/ && echo $FILE) |
    basho "$bashocmd" -l x -e '${x}'
done