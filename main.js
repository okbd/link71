function preview_image(input) {
    console.log(input.id);
    var str = input.id;
    str = str.toString();
    var product_image_id = str.replace("load_image", "preview_image");

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e, id) {
            console.log(e);
            $('#' + product_image_id)
                .attr('src', e.target.result);
            $('#logo_name')
                .attr('value', input.files[0].name);
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        $('#' + product_image_id)
            .attr('src', '');
    }
}

function delete_channel(r) {
    var confirmation = confirm("Want to delete this channel ?");
    if (confirmation == true) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("channel_list").deleteRow(i);
        $value = r.id;
        $.ajax({
            type: 'get',
            url: "/delete_channel",
            data: { 'search': $value },
            success: function(data) {
                console.log(data);
            }
        });
    } else {
        alert('Delete Cancelled')
    }
}

function delete_ad(r) {
    var confirmation = confirm("Want to delete this advertisement ?");
    if (confirmation == true) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("ad_list").deleteRow(i);
        $value = r.id;
        $.ajax({
            type: 'get',
            url: "/delete_ad",
            data: { 'search': $value },
            success: function(data) {
                console.log(data);
            }
        });
    } else {
        alert('Delete Cancelled')
    }
}

function confirm_password(event) {
    var pass = document.getElementById("new_password").value
    var confPass = document.getElementById("confirm_new_password").value
    if (pass != confPass) {
        event.preventDefault();
        alert('Wrong confirm password !');
    }
}

//channel js


var v = new Array();
       v[0] = ["http://172.16.50.2:8081/hls/amrbd-sam-1.m3u8"];
       v[1] = ["http://172.16.50.2:8081/hls/amrbd-sam-2.m3u8"];
       v[2] = ["http://172.16.50.2:8081/hls/amrbd-sam-3.m3u8"];
       v[3] = ["http://172.16.50.2:8081/hls/amrbd-sam-4.m3u8"];
       v[4] = ["http://172.16.50.2:8081/hls/amrbd-sam-5.m3u8"];
       v[5] = ["http://172.16.50.2:8081/hls/amrbd-sam-6.m3u8"];
       v[6] = ["http://172.16.50.2:8081/hls/amrbd-sam-7.m3u8"];
       v[7] = ["http://172.16.50.2:8081/hls/amrbd-sam-8.m3u8"];
       v[8] = ["http://172.16.50.2:8081/hls/amrbd-sam-9.m3u8"];
       v[9] = ["http://172.16.50.2:8081/hls/amrbd-sam-10.m3u8"];
       v[10] = ["http://172.16.50.2:8081/hls/amrbd-sam-11.m3u8"];
       v[11] = ["http://172.16.50.2:8081/hls/amrbd-sam-12.m3u8"];

       function changeVid(variable_0) {
            $value=variable_0
        $.ajax({
            type: 'get',
            url: "get_channel_link",
            data: { 'search':  $value },
            success: function(data) {
                // console.log(data[0]['link']);
                var variable_1 = videojs("my-video");
                variable_1["src"](data[0]['link']);
                variable_1["reset"]();
                variable_1["load"]();
            }
        });
       }

       myVar = setInterval(alertFunc, 6000);

       function alertFunc() {
        if(document.getElementById("ad_part1").style.display=="block"){
            document.getElementById("ad_part1").style.display="none";
        }
        else{
            document.getElementById("ad_part1").style.display="block";
        }
        if(document.getElementById("ad_part2").style.display=="block"){
            document.getElementById("ad_part2").style.display="none";
        }
        else{
            document.getElementById("ad_part2").style.display="block";
        }
        if(document.getElementById("ad_part3").style.display=="block"){
            document.getElementById("ad_part3").style.display="none";
        }
        else{
            document.getElementById("ad_part3").style.display="block";
        }
        if(document.getElementById("ad_part4").style.display=="block"){
            document.getElementById("ad_part4").style.display="none";
        }
        else{
            document.getElementById("ad_part4").style.display="block";
        }
        // alert("Hello!");
    }
