curl --include --request POST http://localhost:4741/issues \
  --header "Content-Type: application/json" \
  --data '{
    "issue": {
      "product": "creating a curl script",
      "description": "this is kind of fun",
      "notes": "here are the notes"
    }
  }'
