ids=(
"1473966968600-fa801b869a1a"
"1572804013309-59a88b7e92f1"
"1594633312681-425c7b97ccd1"
"1576566588028-4147f3842f27"
"1591369822096-ffd140ec948f"
"1548036328-c9fa89d128fa"
"1601924921557-45e6dea0e2ff"
"1556821840-3a63f95609a7"
"1586350977771-b3b0abd50c82"
)
for id in "${ids[@]}"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "https://images.unsplash.com/photo-${id}?w=600&h=750&fit=crop")
  echo "$id: $status"
done
