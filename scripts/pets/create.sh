curl --include --request POST http://localhost:4741/pets \
  --header "Content-Type: application/json" \
  --data '{
    "pet": {
      "product": "creating a curl script",
      "description": "this is kind of fun",
      "notes": "here are the notes"
    }
  }'
