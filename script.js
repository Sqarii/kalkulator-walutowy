let eur;
	let usd;
	let gbp;
	let aud;
	let cad;
	let chf;
	let cny;
	let sek;
	let jpy;

	USDRate();
	EURRate();
	GBPRate();
	AUDRate();
	CADRate();
	CHFRate();
	CNYRate();
	SEKRate();
	JPYRate();

	function EURRate()
	{
		let res;

		let ajax = new XMLHttpRequest();

		ajax.onreadystatechange = function()
		{
    		if(ajax.readyState === 4 && ajax.status === 200)
    		{
    			res = JSON.parse(this.responseText);

      			eur =res.rates[0].mid;

      			console.log("eur " + eur);
    		}
    	}
    	ajax.open("GET", "https://api.nbp.pl/api/exchangerates/rates/a/eur/", true);
  		
  		ajax.send();
	}

	function USDRate()
	{
		let res;

		let ajax = new XMLHttpRequest();

		ajax.onreadystatechange = function()
		{
    		if(ajax.readyState === 4 && ajax.status === 200)
    		{
    			res = JSON.parse(this.responseText);

      			usd =res.rates[0].mid;

      			console.log("usd " + usd);
    		}
    	}
    	ajax.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/usd/", true);
  		
  		ajax.send();
	}

	function GBPRate()
	{
		let res;

		let ajax = new XMLHttpRequest();

		ajax.onreadystatechange = function()
		{
    		if(ajax.readyState === 4 && ajax.status === 200)
    		{
    			res = JSON.parse(this.responseText);

      			gbp =res.rates[0].mid;

      			console.log("gbp " + gbp);
    		}
    	}
    	ajax.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/gbp/", true);
  		
  		ajax.send();
	}

	function AUDRate()
	{
		let res;

		let ajax = new XMLHttpRequest();

		ajax.onreadystatechange = function()
		{
    		if(ajax.readyState === 4 && ajax.status === 200)
    		{
    			res = JSON.parse(this.responseText);

      			aud =res.rates[0].mid;

      			console.log("aud " + aud);
    		}
    	}
    	ajax.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/aud/", true);
  		
  		ajax.send();
	}

	function CADRate()
	{
		let res;

		let ajax = new XMLHttpRequest();

		ajax.onreadystatechange = function()
		{
    		if(ajax.readyState === 4 && ajax.status === 200)
    		{
    			res = JSON.parse(this.responseText);

      			cad =res.rates[0].mid;

      			console.log("cad " + cad);
    		}
    	}
    	ajax.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/cad/", true);
  		
  		ajax.send();
	}

	function CHFRate()
	{
		let res;

		let ajax = new XMLHttpRequest();

		ajax.onreadystatechange = function()
		{
    		if(ajax.readyState === 4 && ajax.status === 200)
    		{
    			res = JSON.parse(this.responseText);

      			chf =res.rates[0].mid;

      			console.log("chf " + chf);
    		}
    	}
    	ajax.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/chf/", true);
  		
  		ajax.send();
	}

	function CNYRate()
	{
		let res;

		let ajax = new XMLHttpRequest();

		ajax.onreadystatechange = function()
		{
    		if(ajax.readyState === 4 && ajax.status === 200)
    		{
    			res = JSON.parse(this.responseText);

      			cny =res.rates[0].mid;

      			console.log("cny " + cny);
    		}
    	}
    	ajax.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/cny/", true);
  		
  		ajax.send();
	}

	function SEKRate()
	{
		let res;

		let ajax = new XMLHttpRequest();

		ajax.onreadystatechange = function()
		{
    		if(ajax.readyState === 4 && ajax.status === 200)
    		{
    			res = JSON.parse(this.responseText);

      			sek =res.rates[0].mid;

      			console.log("sek " + sek);
    		}
    	}
    	ajax.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/sek/", true);
  		
  		ajax.send();
	}

	function JPYRate()
	{
		let res;

		let ajax = new XMLHttpRequest();

		ajax.onreadystatechange = function()
		{
    		if(ajax.readyState === 4 && ajax.status === 200)
    		{
    			res = JSON.parse(this.responseText);

      			jpy =res.rates[0].mid;

      			console.log("jpy " + jpy);
    		}
    	}
    	ajax.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/jpy/", true);
  		
  		ajax.send();
	}

	function ClearI1()
	{
		document.getElementById("i1").value = "";
	}

	function ClearI2()
	{
		document.getElementById("i2").value = "";
	}

	function Wynik()
	{
		let rate;

		let sel1 = document.getElementById("s1").value;

		let sel2 = document.getElementById("s2").value;

		console.log(sel1 + " " + sel2);

		if(sel1 == "EUR")
		{
			rate1 = eur;
		}
		else if(sel1 == "USD")
		{
			rate1 = usd;
		}
		else if(sel1 == "GBP")
		{
			rate1 = gbp;
		}
		else if(sel1 == "AUD")
		{
			rate1 = aud;
		}
		else if(sel1 == "CAD")
		{
			rate1 = cad;
		}
		else if(sel1 == "CHF")
		{
			rate1 = chf;
		}
		else if(sel1 == "CNY")
		{
			rate1 = cny;
		}
		else if(sel1 == "SEK")
		{
			rate1 = sek;
		}
		else if(sel1 == "JPY")
		{
			rate1 = jpy;
		}

		if(sel2 == "EUR")
		{
			rate2 = eur;
		}
		else if(sel2 == "USD")
		{
			rate2 = usd;
		}
		else if(sel2 == "GBP")
		{
			rate2 = gbp;
		}
		else if(sel2 == "AUD")
		{
			rate2 = aud;
		}
		else if(sel2 == "CAD")
		{
			rate2 = cad;
		}
		else if(sel2 == "CHF")
		{
			rate2 = chf;
		}
		else if(sel2 == "CNY")
		{
			rate2 = cny;
		}
		else if(sel2 == "SEK")
		{
			rate2 = sek;
		}
		else if(sel2 == "JPY")
		{
			rate2 = jpy;
		}

		if(sel1 == "PLN")
		{
			let inp1 = document.getElementById("i1").value;

			let inp2 = document.getElementById("i2").value;

			if(inp2 == "" || inp2 == null)
			{
				document.getElementById("i1").value = Math.round(inp1 * 100) / 100 ;

				document.getElementById("i2").value = Math.round(inp1 / rate2 * 100) / 100 ;
			}
			else if(inp1 == "" || inp1 == null)
			{
				document.getElementById("i2").value = Math.round(inp2 * 100) / 100 ;

				document.getElementById("i1").value = Math.round(inp2 * rate2 * 100) / 100 ;
			}
		}

		if(sel2 == "PLN")
		{
			let inp1 = document.getElementById("i1").value;

			let inp2 = document.getElementById("i2").value;

			if(inp2 == "" || inp2 == null)
			{
				document.getElementById("i1").value = Math.round(inp1 * 100) / 100 ;

				document.getElementById("i2").value = Math.round(inp1 * rate1 * 100) / 100 ;
			}
			else if(inp1 == "" || inp1 == null)
			{
				document.getElementById("i2").value = Math.round(inp2 * 100) / 100 ;

				document.getElementById("i1").value = Math.round(inp2 / rate1 * 100) / 100 ;
			}
		}

		if(sel1 != "PLN" && sel2 != "PLN")
		{
			let inp1 = document.getElementById("i1").value;

			let inp2 = document.getElementById("i2").value;

			let zl;

			if(inp2 == "" || inp2 == null)
			{
				zl = inp1 * rate1;

				document.getElementById("i1").value = Math.round(inp1 * 100) / 100 ;

				document.getElementById("i2").value = Math.round(zl / rate2 * 100) / 100 ;
			}
			else if(inp1 == "" || inp1 == null)
			{
				zl = inp2 * rate2;

				document.getElementById("i2").value = Math.round(inp2 * 100) / 100 ;

				document.getElementById("i1").value = Math.round(zl / rate1 * 100) / 100 ; 
			}
		}
	}

	function ChangeValue()
	{
		let s1 = document.getElementById("s1").selectedIndex;

		let s2 = document.getElementById("s2").selectedIndex;

		if(s1 == 0) //PLN
		{
			document.getElementById("s2").options[0].hidden = false; //EUR
			document.getElementById("s2").options[1].hidden = false; //USD
			document.getElementById("s2").options[2].hidden = false; //GBP
			document.getElementById("s2").options[3].hidden = false; //AUD
			document.getElementById("s2").options[4].hidden = false; //CAD
			document.getElementById("s2").options[5].hidden = false; //CHF
			document.getElementById("s2").options[6].hidden = false; //CNY
			document.getElementById("s2").options[7].hidden = false; //SEK
			document.getElementById("s2").options[8].hidden = false; //JPY
			document.getElementById("s2").options[9].hidden = true; //PLN
		}
		else if(s1 == 1) //EUR
		{
			document.getElementById("s2").options[0].hidden = true; //EUR
			document.getElementById("s2").options[1].hidden = false; //USD
			document.getElementById("s2").options[2].hidden = false; //GBP
			document.getElementById("s2").options[3].hidden = false; //AUD
			document.getElementById("s2").options[4].hidden = false; //CAD
			document.getElementById("s2").options[5].hidden = false; //CHF
			document.getElementById("s2").options[6].hidden = false; //CNY
			document.getElementById("s2").options[7].hidden = false; //SEK
			document.getElementById("s2").options[8].hidden = false; //JPY
			document.getElementById("s2").options[9].hidden = false; //PLN
		}
		else if(s1 == 2) //USD
		{
			document.getElementById("s2").options[0].hidden = false; //EUR
			document.getElementById("s2").options[1].hidden = true; //USD
			document.getElementById("s2").options[2].hidden = false; //GBP
			document.getElementById("s2").options[3].hidden = false; //AUD
			document.getElementById("s2").options[4].hidden = false; //CAD
			document.getElementById("s2").options[5].hidden = false; //CHF
			document.getElementById("s2").options[6].hidden = false; //CNY
			document.getElementById("s2").options[7].hidden = false; //SEK
			document.getElementById("s2").options[8].hidden = false; //JPY
			document.getElementById("s2").options[9].hidden = false; //PLN
		}
		else if(s1 == 3) //GBP
		{
			document.getElementById("s2").options[0].hidden = false; //EUR
			document.getElementById("s2").options[1].hidden = false; //USD
			document.getElementById("s2").options[2].hidden = true; //GBP
			document.getElementById("s2").options[3].hidden = false; //AUD
			document.getElementById("s2").options[4].hidden = false; //CAD
			document.getElementById("s2").options[5].hidden = false; //CHF
			document.getElementById("s2").options[6].hidden = false; //CNY
			document.getElementById("s2").options[7].hidden = false; //SEK
			document.getElementById("s2").options[8].hidden = false; //JPY
			document.getElementById("s2").options[9].hidden = false; //PLN
		}
		else if(s1 == 4) //AUD
		{
			document.getElementById("s2").options[0].hidden = false; //EUR
			document.getElementById("s2").options[1].hidden = false; //USD
			document.getElementById("s2").options[2].hidden = false; //GBP
			document.getElementById("s2").options[3].hidden = true; //AUD
			document.getElementById("s2").options[4].hidden = false; //CAD
			document.getElementById("s2").options[5].hidden = false; //CHF
			document.getElementById("s2").options[6].hidden = false; //CNY
			document.getElementById("s2").options[7].hidden = false; //SEK
			document.getElementById("s2").options[8].hidden = false; //JPY
			document.getElementById("s2").options[9].hidden = false; //PLN
		}
		else if(s1 == 5) //CAD
		{
			document.getElementById("s2").options[0].hidden = false; //EUR
			document.getElementById("s2").options[1].hidden = false; //USD
			document.getElementById("s2").options[2].hidden = false; //GBP
			document.getElementById("s2").options[3].hidden = false; //AUD
			document.getElementById("s2").options[4].hidden = true; //CAD
			document.getElementById("s2").options[5].hidden = false; //CHF
			document.getElementById("s2").options[6].hidden = false; //CNY
			document.getElementById("s2").options[7].hidden = false; //SEK
			document.getElementById("s2").options[8].hidden = false; //JPY
			document.getElementById("s2").options[9].hidden = false; //PLN
		}
		else if(s1 == 6) //CHF
		{
			document.getElementById("s2").options[0].hidden = false; //EUR
			document.getElementById("s2").options[1].hidden = false; //USD
			document.getElementById("s2").options[2].hidden = false; //GBP
			document.getElementById("s2").options[3].hidden = false; //AUD
			document.getElementById("s2").options[4].hidden = false; //CAD
			document.getElementById("s2").options[5].hidden = true; //CHF
			document.getElementById("s2").options[6].hidden = false; //CNY
			document.getElementById("s2").options[7].hidden = false; //SEK
			document.getElementById("s2").options[8].hidden = false; //JPY
			document.getElementById("s2").options[9].hidden = false; //PLN
		}
		else if(s1 == 7) //CNY
		{
			document.getElementById("s2").options[0].hidden = false; //EUR
			document.getElementById("s2").options[1].hidden = false; //USD
			document.getElementById("s2").options[2].hidden = false; //GBP
			document.getElementById("s2").options[3].hidden = false; //AUD
			document.getElementById("s2").options[4].hidden = false; //CAD
			document.getElementById("s2").options[5].hidden = false; //CHF
			document.getElementById("s2").options[6].hidden = true; //CNY
			document.getElementById("s2").options[7].hidden = false; //SEK
			document.getElementById("s2").options[8].hidden = false; //JPY
			document.getElementById("s2").options[9].hidden = false; //PLN
		}
		else if(s1 == 8) //SEK
		{
			document.getElementById("s2").options[0].hidden = false; //EUR
			document.getElementById("s2").options[1].hidden = false; //USD
			document.getElementById("s2").options[2].hidden = false; //GBP
			document.getElementById("s2").options[3].hidden = false; //AUD
			document.getElementById("s2").options[4].hidden = false; //CAD
			document.getElementById("s2").options[5].hidden = false; //CHF
			document.getElementById("s2").options[6].hidden = false; //CNY
			document.getElementById("s2").options[7].hidden = true; //SEK
			document.getElementById("s2").options[8].hidden = false; //JPY
			document.getElementById("s2").options[9].hidden = false; //PLN
		}
		else if(s1 == 9) //JPY
		{
			document.getElementById("s2").options[0].hidden = false; //EUR
			document.getElementById("s2").options[1].hidden = false; //USD
			document.getElementById("s2").options[2].hidden = false; //GBP
			document.getElementById("s2").options[3].hidden = false; //AUD
			document.getElementById("s2").options[4].hidden = false; //CAD
			document.getElementById("s2").options[5].hidden = false; //CHF
			document.getElementById("s2").options[6].hidden = false; //CNY
			document.getElementById("s2").options[7].hidden = false; //SEK
			document.getElementById("s2").options[8].hidden = true; //JPY
			document.getElementById("s2").options[9].hidden = false; //PLN
		}

		///second select


		if(s2 == 0) //EUR
		{
			document.getElementById("s1").options[0].hidden = false; //PLN
			document.getElementById("s1").options[1].hidden = true; //EUR
			document.getElementById("s1").options[2].hidden = false; //USD
			document.getElementById("s1").options[3].hidden = false; //GBP
			document.getElementById("s1").options[4].hidden = false; //AUD
			document.getElementById("s1").options[5].hidden = false; //CAD
			document.getElementById("s1").options[6].hidden = false; //CHF
			document.getElementById("s1").options[7].hidden = false; //CNY
			document.getElementById("s1").options[8].hidden = false; //SEK
			document.getElementById("s1").options[9].hidden = false; //JPY
		}
		else if(s2 == 1) //USD
		{
			document.getElementById("s1").options[0].hidden = false; //PLN
			document.getElementById("s1").options[1].hidden = false; //EUR
			document.getElementById("s1").options[2].hidden = true; //USD
			document.getElementById("s1").options[3].hidden = false; //GBP
			document.getElementById("s1").options[4].hidden = false; //AUD
			document.getElementById("s1").options[5].hidden = false; //CAD
			document.getElementById("s1").options[6].hidden = false; //CHF
			document.getElementById("s1").options[7].hidden = false; //CNY
			document.getElementById("s1").options[8].hidden = false; //SEK
			document.getElementById("s1").options[9].hidden = false; //JPY
		}
		else if(s2 == 2) //GBP
		{
			document.getElementById("s1").options[0].hidden = false; //PLN
			document.getElementById("s1").options[1].hidden = false; //EUR
			document.getElementById("s1").options[2].hidden = false; //USD
			document.getElementById("s1").options[3].hidden = true; //GBP
			document.getElementById("s1").options[4].hidden = false; //AUD
			document.getElementById("s1").options[5].hidden = false; //CAD
			document.getElementById("s1").options[6].hidden = false; //CHF
			document.getElementById("s1").options[7].hidden = false; //CNY
			document.getElementById("s1").options[8].hidden = false; //SEK
			document.getElementById("s1").options[9].hidden = false; //JPY
		}
		else if(s2 == 3) //AUD
		{
			document.getElementById("s1").options[0].hidden = false; //PLN
			document.getElementById("s1").options[1].hidden = false; //EUR
			document.getElementById("s1").options[2].hidden = false; //USD
			document.getElementById("s1").options[3].hidden = false; //GBP
			document.getElementById("s1").options[4].hidden = true; //AUD
			document.getElementById("s1").options[5].hidden = false; //CAD
			document.getElementById("s1").options[6].hidden = false; //CHF
			document.getElementById("s1").options[7].hidden = false; //CNY
			document.getElementById("s1").options[8].hidden = false; //SEK
			document.getElementById("s1").options[9].hidden = false; //JPY
		}
		else if(s2 == 4) //CAD
		{
			document.getElementById("s1").options[0].hidden = false; //PLN
			document.getElementById("s1").options[1].hidden = false; //EUR
			document.getElementById("s1").options[2].hidden = false; //USD
			document.getElementById("s1").options[3].hidden = false; //GBP
			document.getElementById("s1").options[4].hidden = false; //AUD
			document.getElementById("s1").options[5].hidden = true; //CAD
			document.getElementById("s1").options[6].hidden = false; //CHF
			document.getElementById("s1").options[7].hidden = false; //CNY
			document.getElementById("s1").options[8].hidden = false; //SEK
			document.getElementById("s1").options[9].hidden = false; //JPY
		}
		else if(s2 == 5) //CHF
		{
			document.getElementById("s1").options[0].hidden = false; //PLN
			document.getElementById("s1").options[1].hidden = false; //EUR
			document.getElementById("s1").options[2].hidden = false; //USD
			document.getElementById("s1").options[3].hidden = false; //GBP
			document.getElementById("s1").options[4].hidden = false; //AUD
			document.getElementById("s1").options[5].hidden = false; //CAD
			document.getElementById("s1").options[6].hidden = true; //CHF
			document.getElementById("s1").options[7].hidden = false; //CNY
			document.getElementById("s1").options[8].hidden = false; //SEK
			document.getElementById("s1").options[9].hidden = false; //JPY
		}
		else if(s2 == 6) //CNY
		{
			document.getElementById("s1").options[0].hidden = false; //PLN
			document.getElementById("s1").options[1].hidden = false; //EUR
			document.getElementById("s1").options[2].hidden = false; //USD
			document.getElementById("s1").options[3].hidden = false; //GBP
			document.getElementById("s1").options[4].hidden = false; //AUD
			document.getElementById("s1").options[5].hidden = false; //CAD
			document.getElementById("s1").options[6].hidden = false; //CHF
			document.getElementById("s1").options[7].hidden = true; //CNY
			document.getElementById("s1").options[8].hidden = false; //SEK
			document.getElementById("s1").options[9].hidden = false; //JPY
		}
		else if(s2 == 7) //SEK
		{
			document.getElementById("s1").options[0].hidden = false; //PLN
			document.getElementById("s1").options[1].hidden = false; //EUR
			document.getElementById("s1").options[2].hidden = false; //USD
			document.getElementById("s1").options[3].hidden = false; //GBP
			document.getElementById("s1").options[4].hidden = false; //AUD
			document.getElementById("s1").options[5].hidden = false; //CAD
			document.getElementById("s1").options[6].hidden = false; //CHF
			document.getElementById("s1").options[7].hidden = false; //CNY
			document.getElementById("s1").options[8].hidden = true; //SEK
			document.getElementById("s1").options[9].hidden = false; //JPY
		}
		else if(s2 == 8) //JPY
		{
			document.getElementById("s1").options[0].hidden = false; //PLN
			document.getElementById("s1").options[1].hidden = false; //EUR
			document.getElementById("s1").options[2].hidden = false; //USD
			document.getElementById("s1").options[3].hidden = false; //GBP
			document.getElementById("s1").options[4].hidden = false; //AUD
			document.getElementById("s1").options[5].hidden = false; //CAD
			document.getElementById("s1").options[6].hidden = false; //CHF
			document.getElementById("s1").options[7].hidden = false; //CNY
			document.getElementById("s1").options[8].hidden = false; //SEK
			document.getElementById("s1").options[9].hidden = true; //JPY
		}
		else if(s2 == 9) //PLN
		{
			document.getElementById("s1").options[0].hidden = true; //PLN
			document.getElementById("s1").options[1].hidden = false; //EUR
			document.getElementById("s1").options[2].hidden = false; //USD
			document.getElementById("s1").options[3].hidden = false; //GBP
			document.getElementById("s1").options[4].hidden = false; //AUD
			document.getElementById("s1").options[5].hidden = false; //CAD
			document.getElementById("s1").options[6].hidden = false; //CHF
			document.getElementById("s1").options[7].hidden = false; //CNY
			document.getElementById("s1").options[8].hidden = false; //SEK
			document.getElementById("s1").options[9].hidden = false; //JPY
		}
	
	}