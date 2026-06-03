ids=(
"1507003211169-0a1dd7228f2d"
"1487412720507-e7ab37603c6f"
)
for id in "${ids[@]}"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "https://images.unsplash.com/photo-${id}?w=600&h=750&fit=crop")
  echo "$id: $status"
done
