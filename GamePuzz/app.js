// var result = document.getElementById('result');
// var i = 1;
// setInterval(function(){
//     result.innerText = i;
//     i++;
// },1000);
function begin() {
    let image = [
        "Conho/ConHo.jpg",
        "ConMeo/ConMeo.jpg",
        "ConNgua/ConNgua.jpg",
        "ConTho/ConTho.jpg",
        "Ngua3d/Ngua3d.jpg"
    ];
    let imageRamdom = Math.floor(Math.random() * image.length);
    if (imageRamdom === 0) {
        document.getElementById("image").value = "0";
    } else if (imageRamdom === 1) {
        document.getElementById("image").value = "1";
    } else if (imageRamdom === 2) {
        document.getElementById("image").value = "2";
    } else if (imageRamdom === 3) {
        document.getElementById("image").value = "3";
    } else {
        document.getElementById("image").value = "4";
    }
    document.getElementById("image").src = image[imageRamdom];
    document.getElementById("img1").src = "Ngua3d/Ngua2.png";
    document.getElementById("img2").src = "Ngua3d/Ngua3.png";
    document.getElementById("img3").src = "Ngua3d/Ngua1.png";
    checkImg()
}
function img1() {
    let arrImage1 =
        [
            "Conho/1.png",
            "ConMeo/1.png",
            "ConNgua/1.png",
            "ConTho/1.png",
            "Ngua3d/Ngua1.png"
        ];
    let array1 = Math.floor(Math.random() * arrImage1.length);
    if (array1 === 0) {
        document.getElementById("img1").value = "0";
        console.log("value0");
    } else if (array1 === 1) {
        document.getElementById("img1").value = "1";
        console.log("value1");
    } else if (array1 === 2) {
        document.getElementById("img1").value = "2";
        console.log("value2");
    } else if (array1 === 3) {
        document.getElementById("img1").value = "3";
        console.log("value3");
    } else {
        document.getElementById("img1").value = "4";
        console.log("value4");
    }
    document.getElementById("img1").src = arrImage1[array1];
    checkImg()
}

function img2() {
    let arrImage2 =
        [
            "Conho/2.png",
            "ConMeo/2.png",
            "ConNgua/2.png",
            "ConTho/2.png",
            "Ngua3d/Ngua2.png"
        ];
    let array2 = Math.floor(Math.random() * arrImage2.length);
    if (array2 === 0) {
        document.getElementById("img2").value = "0";
    } else if (array2 === 1) {
        document.getElementById("img2").value = "1";
    } else if (array2 === 2) {
        document.getElementById("img2").value = "2";
    } else if (array2 === 3) {
        document.getElementById("img2").value = "3";
    } else {
        document.getElementById("img2").value = "4";
    }
    document.getElementById("img2").src = arrImage2[array2];
    checkImg()
}

function img3() {
    let arrImage3 =
        [
            "Conho/3.png",
            "ConMeo/3.png",
            "ConNgua/3.png",
            "ConTho/3.png",
            "Ngua3d/Ngua3.png"
        ];
    let array3 = Math.floor(Math.random() * arrImage3.length);
    if (array3 === 0) {
        document.getElementById("img3").value = "0";
    } else if (array3 === 1) {
        document.getElementById("img3").value = "1";
    } else if (array3 === 2) {
        document.getElementById("img3").value = "2";
    } else if (array3 === 3) {
        document.getElementById("img3").value = "3";
    } else {
        document.getElementById("img3").value = "4";
    }
    console.log(array3);
    document.getElementById("img3").src = arrImage3[array3];
    checkImg();
}

function checkImg() {
    let imageRamdom, img1, img2, img3;
    let result = false;
    imageRamdom = document.getElementById("image").value;
    img1 = document.getElementById("img1").value;
    img2 = document.getElementById("img2").value;
    img3 = document.getElementById("img3").value;
    if (imageRamdom === img1 &&
        imageRamdom === img2 &&
        imageRamdom === img3)
    {
        result = true;
        document.getElementById("mytable").style.borderColor="blue";
        alert("You WIN");
    } else {
        result=false;
        document.getElementById("mytable").style.borderColor="red";
    }
}
