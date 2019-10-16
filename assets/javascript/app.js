$(document).ready(function () {
    var table;

// FIREBASE
    var firebaseConfig = {
        apiKey: "AIzaSyCGqvbJZymau1ztidkgJNAgGQptLqjynls",
        authDomain: "jeapordy-92285.firebaseapp.com",
        databaseURL: "https://jeapordy-92285.firebaseio.com",
        projectId: "jeapordy-92285",
        storageBucket: "jeapordy-92285.appspot.com",
        messagingSenderId: "452569277380",
        appId: "1:452569277380:web:8f8b9d0a09458173a4fa91"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Firesbase Pull && Page Update
    firebase.database().ref().on("value", function(snapshot) {
        contents = snapshot.val();
        console.log(contents);
        if (contents == null){
            inGameBoard();
            GameBoardLoad();
        } else {
        $(".table-load").append(snapshot.val().table.tableStore);
        GameBoardLoad();
        }

    });

// FUNCTIONS
    function tableUpdate(){
        table = $(".table-load").html();
        console.log(table);
        firebaseUpdate(table);
        location.reload();
    }

    function firebaseUpdate(data1){
        var userInputRef = firebase.database().ref("table/");
            userInputRef.set ({ tableStore: data1 });
    }

    function inGameBoard(){
                 $(".table-load").append(
            "<table style='height:200%'><tr><th>Column1</th><th>Column2</th><th>Column3</th><th>Column4</th><th>Column5</th></tr><tr><td><button id='c1r2'>2 Stars!</button></td><td><button id='c2r2'>2 Stars!</button></td><td><button id='c3r2'>2 Stars!</button></td><td><button id='c4r2'>2 Stars!</button></td><td><button id='c5r2'>2 Stars!</button></td></tr><tr><td><button id='c1r3'>3 Stars!</button></td><td><button id='c2r3'>3 Stars!</button></td><td><button id='c3r3'>3 Stars!</button></td><td><button id='c4r3'>3 Stars!</button></td><td><button id='c5r3'>3 Stars!</button></td></tr><tr><td><button id='c1r4'>4 Stars!</button></td><td><button id='c2r4'>4 Stars!</button></td><td><button id='c3r4'>4 Stars!</button></td><td><button id='c4r4'>4 Stars!</button></td><td><button id='c5r4'>4 Stars!</button></td></tr><tr><td><button id='c1r5'>5 Stars!</button></td><td><button id='c2r5'>5 Stars!</button></td><td><button id='c3r5'>5 Stars!</button></td><td><button id='c4r5'>5 Stars!</button></td><td><button id='c5r5'>5 Stars!</button></td></tr><tr><td><button id='c1r6'>6 Stars!</button></td><td><button id='c2r6'>6 Stars!</button></td><td><button id='c3r6'>6 Stars!</button></td><td><button id='c4r6'>6 Stars!</button></td><td><button id='c5r6'>6 Stars!</button></td></tr></table>"
        );
    }
    
    function GameBoardLoad(){
        // Button Clicks
        $("#c1r2").on("click", function(){
            $("#col1-row2").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c1r2").remove();
                $("#col1-row2").hide();
                tableUpdate();
            })
        })


        $("#c2r2").on("click", function(){
            $("#col2-row2").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c2r2").remove();
                $("#col2-row2").hide();
                tableUpdate();
            })
        })


        $("#c3r2").on("click", function(){
            $("#col3-row2").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c3r2").remove();
                $("#col3-row2").hide();
                tableUpdate();
            })
        })

        $("#c4r2").on("click", function(){
            $("#col4-row2").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c4r2").remove();
                $("#col4-row2").hide();
                tableUpdate();
            })
        })
        
        $("#c5r2").on("click", function(){
            $("#col5-row2").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c5r2").remove();
                $("#col5-row2").hide();
                tableUpdate();
            })
        })
        
        
        $("#c1r3").on("click", function(){
            $("#col1-row3").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c1r3").remove();
                $("#col1-row3").hide();
                tableUpdate();
            })
        })


        $("#c2r3").on("click", function(){
            $("#col2-row3").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c2r3").remove();
                $("#col2-row3").hide();
                tableUpdate();
            })
        })


        $("#c3r3").on("click", function(){
            $("#col3-row3").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c3r3").remove();
                $("#col3-row3").hide();
                tableUpdate();
            })
        })

        $("#c4r3").on("click", function(){
            $("#col4-row3").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c4r3").remove();
                $("#col4-row3").hide();
                tableUpdate();
            })
        })
        
        $("#c5r3").on("click", function(){
            $("#col5-row3").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c5r3").remove();
                $("#col5-row3").hide();
                tableUpdate();
            })
        })
        
        $("#c1r4").on("click", function(){
            $("#col1-row4").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c1r4").remove();
                $("#col1-row4").hide();
                tableUpdate();
            })
        })


        $("#c2r4").on("click", function(){
            $("#col2-row4").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c2r4").remove();
                $("#col2-row4").hide();
                tableUpdate();
            })
        })


        $("#c3r4").on("click", function(){
            $("#col3-row4").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c3r4").remove();
                $("#col3-row4").hide();
                tableUpdate();
            })
        })

        $("#c4r4").on("click", function(){
            $("#col4-row4").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c4r4").remove();
                $("#col4-row4").hide();
                tableUpdate();
            })
        })
        
        $("#c5r4").on("click", function(){
            $("#col5-row4").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c5r4").remove();
                $("#col5-row4").hide();
                tableUpdate();
            })
        })
        

        $("#c1r5").on("click", function(){
            $("#col1-row5").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c1r5").remove();
                $("#col1-row5").hide();
                tableUpdate();
            })
        })


        $("#c2r5").on("click", function(){
            $("#col2-row5").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c2r5").remove();
                $("#col2-row5").hide();
                tableUpdate();
            })
        })


        $("#c3r5").on("click", function(){
            $("#col3-row5").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c3r5").remove();
                $("#col3-row5").hide();
                tableUpdate();
            })
        })

        $("#c4r5").on("click", function(){
            $("#col4-row5").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c4r5").remove();
                $("#col4-row5").hide();
                tableUpdate();
            })
        })
        
        $("#c5r5").on("click", function(){
            $("#col5-row5").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c5r5").remove();
                $("#col5-row5").hide();
                tableUpdate();
            })
        })
        
        $("#c1r6").on("click", function(){
            $("#col1-row6").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c1r6").remove();
                $("#col1-row6").hide();
                tableUpdate();
            })
        })


        $("#c2r6").on("click", function(){
            $("#col2-row6").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c2r6").remove();
                $("#col2-row6").hide();
                tableUpdate();
            })
        })


        $("#c3r6").on("click", function(){
            $("#col3-row6").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c3r6").remove();
                $("#col3-row6").hide();
                tableUpdate();
            })
        })

        $("#c4r6").on("click", function(){
            $("#col4-row6").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c4r6").remove();
                $("#col4-row6").hide();
                tableUpdate();
            })
        })
        
        $("#c5r6").on("click", function(){
            $("#col5-row6").show();
            $("table").hide();
            $("#qs_hide").append("<button id='submit'>Return</button>");
            
            $("#submit").on("click", function() {
                $("table").show();
                $("#submit").remove();
                $("#c5r6").remove();
                $("#col5-row6").hide();
                tableUpdate();
            })
        })
        


    }

    $(".qs").hide();

});