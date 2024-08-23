const str = `[{
		"Category": "아우터",
		"Brand": "트릴리온",
		"ProductName": "유니섹스 발마칸 더플 숏 코트 (BEIGE)",
		"Price": 98000,
		"DiscountRate": "24%",
		"OriginalPrice": 128900,
		"ProductURL": "https://www.musinsa.com/app/goods/2862908", 
		"ImageURL":"https://image.msscdn.net/thumbnails/images/goods_img/20221014/2862908/2862908_1_big.jpg?w=780"
	},
	{
		"Category": "아우터",
		"Brand": "데밀",
		"ProductName": "LOT.062 파이오니어 셀비지 데님자켓 인디고",
		"Price": 223200,
		"DiscountRate": "20%",
		"OriginalPrice": 279000,
		"ProductURL": "https://www.musinsa.com/app/goods/3510056", 
		"ImageURL":"https://image.msscdn.net/thumbnails/images/goods_img/20230829/3510056/3510056_17147199908980_big.jpg?w=780"
}]`;

  let obj = JSON.parse(str);

  let txt = ""

  let image = document.getElementsByClassName("image");
  let brand_name = document.getElementsByClassName("brand-name");
  let product_name = document.getElementsByClassName("prd-name");
  let discount_rate = document.getElementsByClassName("discount-rate");
  let price = document.getElementsByClassName("price");
  document.getElementById("count").textContent = obj.length;
  
  for (i = 0; obj.length; i++) {

		txt = obj[i]["ImageURL"];
		image[i].src = txt;

		txt = obj[i]["Brand"];
		brand_name[i].innerHTML = txt;

		txt = obj[i]["ProductName"];
		product_name[i].innerHTML = txt;

		txt = obj[i]["DiscountRate"];
		discount_rate[i].innerHTML = txt;

		txt = obj[i]["Price"];
		price[i].innerHTML = `${txt.toLocaleString()}원`;

  }

