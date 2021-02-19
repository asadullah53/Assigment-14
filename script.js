const hidecredit = () => {
    const value = document.getElementById("credit").value;
    //   alert(value);
    if (value.length < 16 || value.length > 16) {
      alert("credit card number should be 0f 16 digits");
    } else {
      let rvalue = "";
      for (let i = 0; i < value.length; i++) {
        if (i < 12) {
          rvalue += "*";
        } else {
          rvalue += value[i];
        }
      }
      // console.log(rvalue);
      document.getElementById(
        "creditresult"
      ).innerText = `Your last digits are ${rvalue}`;
      document.getElementById("credit").value = "";
      return rvalue;
    }
  };
  const countp = () => {
    const pstring = document.getElementById("pstring");
    //   alert(value);
    if (pstring.value == "") {
      alert("Please enter a string");
    } else {
      const str = pstring.value;
      const rvalue = (str.match(/potato/g) || []).length;
      // console.log(str);
      // console.log(rvalue);
      document.getElementById("presult").innerText = `
      Number of Potatoes = ${rvalue}
    `;
      pstring.value = "";
      return rvalue;
    }
  };
  
  const doublechar = () => {
    const dstr = document.getElementById("dstr");
    if (dstr.value == "") {
      alert("Enter string please");
    } else {
      const result = double(dstr.value);
      // console.log(result);
      document.getElementById("dresult").innerText = ` ${result}`;
      dstr.value = "";
    }
  };
  
  const double = (v) => {
    let rvalue = "";
    for (let i = 0; i < v.length; i++) {
      rvalue += v[i] + v[i];
    }
    return rvalue;
  };
  const csalary = () => {
    const sal = document.getElementById("s");
  
    //   alert(value);
    if (sal.value == "") {
      alert("Please enter salary amount");
    } else {
      console.log(sal.value);
      const b = sal.value;
      let HRA;
      let DA;
      if (b <= 10000) {
        HRA = 20;
        DA = 80;
      } else if (b <= 20000) {
        HRA = 25;
        DA = 90;
      } else if (b > 20000) {
        HRA = 30;
        DA = 95;
      }
      console.log(b);
      const grosssalary =
        Number(b) + Number((b * HRA) / 100) + Number((b * DA) / 100);
  
      // alert(result);
      document.getElementById("sresult").innerText = `${grosssalary} `;
      sal.value = "";
    }
  };
  
  const bill = () => {
    const unit = document.getElementById("unit").value;
  
    if (unit == "" || unit < 0) {
      alert("unit shoubld be greater than zero");
    } else {
      let cost;
      if (unit > 0 && unit <= 50) {
        cost = 0.5;
      } else if (unit > 50 && unit <= 150) {
        cost = 0.75;
      } else if (unit > 150 && unit <= 250) {
        cost = 1.2;
      } else {
        cost = 1.5;
      }
      const bill = unit * cost;
      const sr = (bill * 20) / 100;
      const netbill = bill + sr;
  
      document.getElementById(
        "uresult"
      ).innerText = `Total unit =  ${unit} , Cost Per Unit = Rs. ${cost}
      Bill = Rs. ${bill} , Surcharge = Rs. ${sr} and Net Bill = Rs. ${netbill}
      `;
    }
  };
  const multiples = () => {
    const limit = document.getElementById("limit").value;
    if (limit > 1000) {
      alert("limit should be smaller than 1000");
    } else {
      let multi = "";
      let sum = 0;
      for (let x = 0; x < limit; x++) {
        if (x % 3 === 0 || x % 5 === 0) {
          sum += x;
          if (x > 0) {
            multi += "*" + x;
          }
        }
      }
  
      document.getElementById("mresult").innerText = `${multi} and sum =${sum}  
      `;
    }
  };
  const countr = () => {
    const ele = document.getElementById("re").value;
    if (ele > 0) {
      const array = [ele];
      const obj = {};
  
      for (let i = 0; i < ele; i++) {
        const e = i + 1;
        const v = prompt(`Enter number value for element ${e}`);
        array[i] = v;
        console.log(v);
  
        obj[v] = 0;
        // console.log(obj);
      }
  
      array.map((v, i) => {
        obj[v] = obj[v] + 1;
      });
      var myJSON = JSON.stringify(obj);
      document.getElementById("rresult").innerText =
        "Array = " + array.toString() + " and Obj = " + myJSON;
      document.getElementById("re").value = "";
      return obj;
    } else {
      alert("no of elements should be greater than zero");
    }
  };
  const chcount = () => {
    const ch = document.getElementById("ch");
    const str = document.getElementById("stri");
    if (ch.value.length > 0 && ch.value.length < 2 && str.value.length > 0) {
      let c = 0;
      for (let i = 0; i < str.value.length; i++) {
        if (ch.value == str.value[i]) {
          c += 1;
        }
        console.log(ch.value, str.value[i]);
      }
      document.getElementById(
        "csresult"
      ).innerText = `${ch.value} and ${str.value} ${c}`;
    } else {
      alert(
        `no of characters shoulb be one not more than one
         and string should have atleast one cahracter`
      );
    }
  };
  