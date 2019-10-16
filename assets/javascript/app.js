$(document).ready(function () {
    var table; 
    var onTable = "true";
    var question;

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
        $(".table-load").empty();
        $("#Qdisplay").empty();
        inGameBoard();
        GameBoardLoad();
        tableUpdate();
        questionUpdate();
        firebasePageStatus(table, onTable, question);
    } else {   
        console.log("Firebase not empty"); 
        onTable = snapshot.val().onTable.pageStatus;
        console.log("Checking table before set" +onTable);

        if (onTable == "true"){
            tableStored = snapshot.val().table.tableStore;
            console.log ("TABLE STORED TO BE APPENDED");
            $(".table-load").empty();
            $("#Qdisplay").empty();
            $(".table-load").append(tableStored);
            console.log("Appended table");
            GameBoardLoad();
            console.log("TABLE HAS BEEN PUSH HALT TILL CLICK");
        } else if (onTable == "false") {     
            question = snapshot.val().quest.questStore;
            console.log("question stored for appending");
            $(".table-load").empty();
            $("#Qdisplay").empty();
            $("#Qdisplay").append(question);
            $("#Qdisplay").append("<button id='submit'>Return</button>");
            console.log("Appended question");
            $("#submit").on("click", function() {
                console.log("submit clicked");
                onTable = "true";
                firebasePageStatus(table, onTable, question);
                location.reload();
            })
        }
    }

    });

// FUNCTIONS
    function questionUpdate(qid){
        question = $("."+qid).html();
        console.log("QUESTION UPDATE STORAGE");
    }

    function tableUpdate(){
        table = $(".table-load").html();
        console.log("TABLE UPDATE STORAGE");
        $("#Qdisplay").empty();
        
    }
    
    function firebasePageStatus(data1, data2, data3){
        var tableRef = firebase.database().ref("table/");
        tableRef.set ({ tableStore: data1});
        console.log("Stored table: ");

        console.log("PAGESTATUS UPDATE: " +data2);
        var onTableRef = firebase.database().ref("onTable/");
        onTableRef.set ({ pageStatus: data2}); 
        console.log("Stored page status: " );
            
        var questRef = firebase.database().ref("quest/");
        questRef.set ({ questStore: data3 });
        console.log("Stored question: ");  
    }


    function inGameBoard(){

        $(".table-load").append(
            "<table style='height:200%'><tr><th>Column1</th><th>Column2</th><th>Column3</th><th>Column4</th><th>Column5</th></tr><tr><td><button id='c1r2'>2 Stars!</button></td><td><button id='c2r2'>2 Stars!</button></td><td><button id='c3r2'>2 Stars!</button></td><td><button id='c4r2'>2 Stars!</button></td><td><button id='c5r2'>2 Stars!</button></td></tr><tr><td><button id='c1r3'>3 Stars!</button></td><td><button id='c2r3'>3 Stars!</button></td><td><button id='c3r3'>3 Stars!</button></td><td><button id='c4r3'>3 Stars!</button></td><td><button id='c5r3'>3 Stars!</button></td></tr><tr><td><button id='c1r4'>4 Stars!</button></td><td><button id='c2r4'>4 Stars!</button></td><td><button id='c3r4'>4 Stars!</button></td><td><button id='c4r4'>4 Stars!</button></td><td><button id='c5r4'>4 Stars!</button></td></tr><tr><td><button id='c1r5'>5 Stars!</button></td><td><button id='c2r5'>5 Stars!</button></td><td><button id='c3r5'>5 Stars!</button></td><td><button id='c4r5'>5 Stars!</button></td><td><button id='c5r5'>5 Stars!</button></td></tr><tr><td><button id='c1r6'>6 Stars!</button></td><td><button id='c2r6'>6 Stars!</button></td><td><button id='c3r6'>6 Stars!</button></td><td><button id='c4r6'>6 Stars!</button></td><td><button id='c5r6'>6 Stars!</button></td></tr></table>"
        );
        console.log("Set initial board");
    }
    
    function GameBoardLoad(){
        // Button Clicks
        $("#c1r2").on("click", function(){
            onTable = "false";          
            $("#c1r2").remove();
            tableUpdate();
            questionUpdate("col1-row2");
            firebasePageStatus(table, onTable, question);
        })


        $("#c2r2").on("click", function(){
            onTable = "false";            
            $("#c2r2").remove();
            tableUpdate();
            questionUpdate("col2-row2"); 
            firebasePageStatus(table, onTable, question);
        })


        $("#c3r2").on("click", function(){
            onTable = "false";            
            $("#c3r2").remove()
            tableUpdate();
            questionUpdate("col3-row2"); 
            firebasePageStatus(table, onTable, question);
        })

        $("#c4r2").on("click", function(){
            onTable = "false";            
            $("#c4r2").remove();
            tableUpdate();
            questionUpdate("col4-row2"); 
            firebasePageStatus(table, onTable, question);
        })
        
        $("#c5r2").on("click", function(){
            onTable = "false";            
            $("#c5r2").remove();
            tableUpdate();
            questionUpdate("col5-row2"); 
            firebasePageStatus(table, onTable, question);
        })
        
        
        $("#c1r3").on("click", function(){
            onTable = "false";            
            $("#c1r3").remove();
            tableUpdate();
            questionUpdate("col1-row3"); 
            firebasePageStatus(table, onTable, question);
        })


        $("#c2r3").on("click", function(){
            onTable = "false";            
            $("#c2r3").remove();
            tableUpdate();
            questionUpdate("col2-row3"); 
            firebasePageStatus(table, onTable, question);
        })


        $("#c3r3").on("click", function(){
            onTable = "false";            
            $("#c3r3").remove();
            tableUpdate();
            questionUpdate("col3-row3"); 
            firebasePageStatus(table, onTable, question);
        })

        $("#c4r3").on("click", function(){
            onTable = "false";            
            $("#c4r3").remove();
            tableUpdate();
            questionUpdate("col4-row3"); 
            firebasePageStatus(table, onTable, question);
        })
        
        $("#c5r3").on("click", function(){
            onTable = "false";            
            $("#c5r3").remove();
            tableUpdate();
            questionUpdate("col5-row3"); 
            firebasePageStatus(table, onTable, question);
        })
        
        $("#c1r4").on("click", function(){
            onTable = "false";            
            $("#c1r4").remove();
            tableUpdate();
            questionUpdate("col1-row4"); 
            firebasePageStatus(table, onTable, question);
        })


        $("#c2r4").on("click", function(){
            onTable = "false";            
            $("#c2r4").remove();
            tableUpdate();
            questionUpdate("col2-row4"); 
            firebasePageStatus(table, onTable, question);
        })


        $("#c3r4").on("click", function(){
            onTable = "false";            
            $("#c3r4").remove();
            tableUpdate();
            questionUpdate("col3-row4"); 
            firebasePageStatus(table, onTable, question);
        })

        $("#c4r4").on("click", function(){
            onTable = "false";            
            $("#c4r4").remove();
            tableUpdate();
            questionUpdate("col4-row4"); 
            firebasePageStatus(table, onTable, question);
        })
        
        $("#c5r4").on("click", function(){
            onTable = "false";            
            $("#c5r4").remove();
            tableUpdate();
            questionUpdate("col5-row4"); 
            firebasePageStatus(table, onTable, question);
        })
        

        $("#c1r5").on("click", function(){
            onTable = "false";            
            $("#c1r5").remove();
            tableUpdate();
            questionUpdate("col1-row5"); 
            firebasePageStatus(table, onTable, question);
        })


        $("#c2r5").on("click", function(){
            onTable = "false";            
            $("#c2r5").remove();
            tableUpdate();
            questionUpdate("col2-row5"); 
            firebasePageStatus(table, onTable, question);
        })


        $("#c3r5").on("click", function(){
            onTable = "false";            
            $("#c3r5").remove();
            tableUpdate();
            questionUpdate("col3-row5"); 
            firebasePageStatus(table, onTable, question);
        })

        $("#c4r5").on("click", function(){
            onTable = "false";            
            $("#c4r5").remove();
            tableUpdate();
            questionUpdate("col4-row5"); 
            firebasePageStatus(table, onTable, question);
        })
        
        $("#c5r5").on("click", function(){
            onTable = "false";            
            $("#c5r5").remove();
            tableUpdate();
            questionUpdate("col5-row5"); 
            firebasePageStatus(table, onTable, question);
        })
        
        $("#c1r6").on("click", function(){
            onTable = "false";            
            $("#c1r6").remove();
            tableUpdate();
            questionUpdate("col1-row6"); 
            firebasePageStatus(table, onTable, question);
        })


        $("#c2r6").on("click", function(){
            onTable = "false";            
            $("#c2r6").remove();
            tableUpdate();
            questionUpdate("col2-row6"); 
            firebasePageStatus(table, onTable, question);
        })


        $("#c3r6").on("click", function(){
            onTable = "false";            
            $("#c3r6").remove();
            tableUpdate();
            questionUpdate("col3-row6"); 
            firebasePageStatus(table, onTable, question);
        })

        $("#c4r6").on("click", function(){
            onTable = "false";            
            $("#c4r6").remove();
            tableUpdate();
            questionUpdate("col4-row6"); 
            firebasePageStatus(table, onTable, question);
        })
        
        $("#c5r6").on("click", function(){
            $("#col5-row6").show();
            onTable = "false";            
            $("#c5r6").remove();
            tableUpdate();
            questionUpdate("col5-row6"); 
            firebasePageStatus(table, onTable, question);
        })

    }



});