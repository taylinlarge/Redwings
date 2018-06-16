console.log("Hello World from main.js!");


var ajaxResults;

function populateTabletRoster(sort) {
	console.log(ajaxResults);

	var playerData = ajaxResults.rosterplayers.playerentry;

	if (sort == "first-name") {
		playerData.sort( sortFirstName );
	} else if (sort == 'last-name') {
		playerData.sort( sortLastName );
	} else if (sort == 'number') {
		playerData.sort( sortNumber );
	} else if ( sort == "position") {
		playerData.sort( sortPosition );
	} else {
		//leave unsorted
	}

	for (var i = 0; i < playerData.length; i++) {
		var dataInfo = playerData[i].player;

		var playerFirstName = dataInfo.FirstName;
		var playerLastName = dataInfo.LastName;
		var jerseyNumber = "#" + dataInfo.JerseyNumber;
		var position = dataInfo.Position;

		if(dataInfo.Weight) {
			var weight = dataInfo.Weight + 'lb';
		} else {
			var weight = "N/A";
		};

		if(dataInfo.Height) {
			var height = dataInfo.Height;
		} else {
			var height = "N/A";
		};

		if(dataInfo.Age) {
			var age = "Age: " + dataInfo.Age;
		} else {
			var age = "N/A";
		};
		
		var playerName = $('<p>');
		var playerPosition = $('<p>');
		var playerHeight = $('<p>');
		var playerWeight = $('<p>');
		var playerAge = $('<p>');
		var playerImg = $('<img>');
		var imgDiv = $('<div>')

		var playerNumber = $('<p>');

		var playerPersonalStat = $('<div>');

		var playerInfo = $('<div>');

		var player = $('<div>');

		var playerList = $('.players-tablet');

		playerName.append(playerFirstName + ' ' + playerLastName);

		playerImg.attr('src', 'assets/img/redwings-player-image.jpeg');
		
		playerPosition.html(position);
		playerHeight.html(height);
		playerWeight.html(weight);
		playerAge.html(age);
		playerNumber.html(jerseyNumber);

		playerName.addClass('player-name');
        playerPosition.addClass('player-data-position');
        playerHeight.addClass('player-data-height');
        playerWeight.addClass('player-data-weight');
        playerAge.addClass('player-data-age');
        playerImg.addClass('player-image');
        imgDiv.addClass('player-image-parent');

        player.attr('data-first', playerFirstName);
        player.attr('data-last', playerLastName);
        player.attr('data-position', position);
        player.attr('data-number', dataInfo.JerseyNumber);

        playerPersonalStat.addClass('player-data');
        playerNumber.addClass('player-number');
        playerInfo.addClass('player-stats');
        player.addClass('player');

        imgDiv.append(playerImg);
		playerPersonalStat.append(playerPosition, playerHeight, playerWeight, playerAge);
		playerInfo.append(playerName, playerPersonalStat);
		player.append(playerNumber, playerInfo, imgDiv);

		playerList.append(player);
	}
	
}

function populateDesktopRoster(sort) {
	console.log(ajaxResults);

	var playerData = ajaxResults.rosterplayers.playerentry;
	var tbody = $('.table-body');
	
	if (sort == "first-name") {
		playerData.sort( sortFirstName );
	} else if (sort == 'last-name') {
		playerData.sort( sortLastName );
	} else if (sort == 'number') {
		playerData.sort( sortNumber );
	} else if ( sort == "position") {
		playerData.sort( sortPosition );
	} else {
		//leave unsorted
	}

	for (var i = 0; i < playerData.length; i++) {
		var dataInfo = playerData[i].player;
		let r = Math.ceil((Math.random() * 80) + 40);
		var tr = $('<tr>');
		var tdSkater = $('<td>');
		var tdGS = $('<td>');
		var tdG = $('<td>');
		var tdA = $('<td>');
		var tdP = $('<td>');
		var tdPlusMinus = $('<td>');
		var tdPIM = $('<td>');
		var tdPPG = $('<td>');
		var tdPPP = $('<td>');
		var tdSHG = $('<td>');
		var tdSHP = $('<td>');
		var tdGWG = $('<td>');
		var tdOTG = $('<td>');
		var tdS = $('<td>');
		var tdSPer = $('<td>');
		var tdFOPer = $('<td>');

		

		tdSkater.text(dataInfo.FirstName.charAt(0) + '. ' + dataInfo.LastName);
		tdGS.text(r);
		tdG.text(r);
		tdA.text(r);
		tdP.text(r);
		tdPlusMinus.text(r);
		tdPIM.text(r);
		tdPPG.text(r);
		tdPPP.text(r);
		tdSHG.text(r);
		tdSHP.text(r);
		tdGWG.text(r);
		tdOTG.text(r);
		tdS.text(r);
		tdSPer.text(r);
		tdFOPer.text(r);

		tdGS.addClass('init-td');
		tdG.addClass('init-td');
		tdA.addClass('init-td');
		tdP.addClass('init-td');
		tdPlusMinus.addClass('init-td');
		tdPIM.addClass('init-td');
		tdPPG.addClass('init-td');
		tdPPP.addClass('init-td');
		tdSHG.addClass('init-td');
		tdSHP.addClass('init-td');
		tdGWG.addClass('init-td');
		tdOTG.addClass('init-td');
		tdS.addClass('init-td');
		tdSPer.addClass('init-td');
		tdFOPer.addClass('init-td');

		tdSkater.addClass('table-player-name');
		tdSkater.attr('scope', 'row');
		tr.addClass('table-row-desktop');
		tr.attr('data-name', dataInfo.FirstName);

		var expandedRow = $('<tr>');
		var tdPic = $('<td>');
		var tdNum = $('<td>');
		var tdPos = $('<td>');
		var tdHeight = $('<td>');
		var tdWeight = $('<td>');

		tdNum.text('# ' + dataInfo.JerseyNumber + " |");
		tdPos.text(dataInfo.Position);
		tdHeight.text(dataInfo.Height);
		tdWeight.text(dataInfo.Weight + ' lbs');

		
		expandedRow.addClass('expanded-player');
		tdPic.addClass('expanded-player-image');
		tdPic.attr('colspan', '1');
		tdNum.addClass('expanded-player-number');
		tdNum.attr('colspan', '6');
		tdPos.addClass('expanded-player-position');
		tdPos.attr('colspan', '1');
		tdHeight.addClass('expanded-player-height');
		tdHeight.attr('colspan', '1');
		tdWeight.addClass('expanded-player-weight');
		tdWeight.attr('colspan', '7');

		tr.append(tdSkater, tdGS, tdG,tdA,tdP,tdPlusMinus,tdPIM,tdPPG,tdPPP,tdSHG,tdSHP,tdGWG,tdOTG,tdS,tdSPer,tdFOPer);
		expandedRow.append(tdPic, tdNum, tdPos, tdHeight, tdWeight);

		tbody.append(tr, expandedRow);
	}

}

$('body').on('click', '.table-row-desktop', function(e) {
	// console.log(this.dataset.name);
	
	$(this).next().toggleClass('active');

})


$(function(){
	const newsKey = "a552b9179cc249ea91d1de87edce3465";
	const username = "darthtaylin";
	const pw = "redwingsapi";

	$.ajax
	({
	  type: "GET",
	  url: "https://api.mysportsfeeds.com/v1.1/pull/nhl/2016-2017-regular/roster_players.json?fordate=20171108&team=detroit-redwings",
	  dataType: 'json',
	  async: true,
	  headers: {
	    "Authorization": "Basic " + btoa(username + ":" + pw)
	  }
	})
	.done(function(response) {
		ajaxResults = response;
		populateTabletRoster();
		populateDesktopRoster();
	});
});


$('.hockey-hamburger, .burger-bars').on('click', function() {
	$('.hamburger-nav').toggleClass('active');
	if($('.hamburger-nav').hasClass('active')) {
		TweenMax.to('.hockey-hamburger', 0.5, {left: "-100px"});
		// TweenMax.to('.burger-bars', 0.5, {left: '-30px'});

		TweenMax.to('.top-burg', 0.4, {rotation: "45deg", top: '7px', width: '20px'});
		TweenMax.to('.mid-burg', 0.3, {width: 0});
		TweenMax.to('.bot-burg', 0.4, {rotation: "-45deg", top: '-3px', width: '20px'});

		$('body').css('overflow', 'hidden');
		TweenMax.staggerFromTo('ul li', 0.3, {top: 0, opacity: 0}, {top: "-10px", opacity: 1}, 0.1);
	} else {
		TweenMax.to('.hockey-hamburger', 0.5, {left: 0});

		TweenMax.to('.top-burg', 0.4, {rotation: "0deg", top: 0, width: '30px'});
		TweenMax.to('.mid-burg', 0.3, {width: '25px'});
		TweenMax.to('.bot-burg', 0.4, {rotation: "0deg", top: 0, width: "20px"});

		// TweenMax.to('.burger-bars', 0.5, {left: '-10px'});
		$('body').css('overflow', 'auto');
	}
});


$(function() {
	var desktopNav = $('.white-divider a');
	TweenMax.staggerTo('.white-divider a', 0.3, {opacity: 1}, 0.1);
})


var sortFirstName = function(a,b){
	if (a.player.FirstName < b.player.FirstName) {
		return -1;
	}
	if (a.player.FirstName > b.player.FirstName) {
		return 1;
	}
	return 0;
}

var sortNumber = function(a,b){
	if (1*a.player.JerseyNumber < 1*b.player.JerseyNumber) {
		return -1;
	}
	if (1*a.player.JerseyNumber > 1*b.player.JerseyNumber) {
		return 1;
	}
	return 0;
}

var sortLastName = function(a,b){
	if (a.player.LastName < b.player.LastName) {
		return -1;
	}
	if (a.player.LastName > b.player.LastName) {
		return 1;
	}
	return 0;
}

var sortPosition = function(a,b){
	if (a.player.Position < b.player.Position) {
		return -1;
	}
	if (a.player.Position > b.player.Position) {
		return 1;
	}
	return 0;
}


$('.dropdown select').change(function() {
	$('.players-tablet').empty();
	$('.table-body').empty();
	populateTabletRoster($(this).val());
	populateDesktopRoster($(this).val());
})



//News-articles swipping in from sides
$(".news-article-parent").waypoint(function () {
	$('.article-1').toggleClass('active');
}, {
	offset: '90%'
})

$(".news-article-parent").waypoint(function () {
	$('.article-2').toggleClass('active');
}, {
	offset: '50%'
})


$(".news-article-parent").waypoint(function () {
	$('.article-3').toggleClass('active');
}, {
	offset: '30%'
})

$(".news-article-parent").waypoint(function () {
	$('.article-4').toggleClass('active');

}, {
	offset: '10%'
})
