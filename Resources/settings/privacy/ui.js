var privacyview = Titanium.UI.createView({
	left: 0,
	height: '100%', 
	width: '100%',
	bottom:screen_height,
	backgroundColor: '#DDD',
	zIndex: 21, 
});
var privacyTitle = Ti.UI.createView({
	top:20,
	left:0,
	backgroundImage: 'images/topBarTrue.png',
	height:headerHeight-20+5,
});
var privacybackButton = Titanium.UI.createButton({
	bottom:13,
	left: 0, 
	width: 46,
	height: 66/2, 
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN,   
});
var privacyBackBt_img = Ti.UI.createImageView({
	image: 'images/arrowLeftTrue.png',
	width: 35/2,
	height: 66/2,
	top:0
});
var textview = Titanium.UI.createScrollView({
  	top: '15%',   
	contentHeight: 'auto', 
	contentWidth: 'auto', 
	showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});
var text = Titanium.UI.createLabel({
	text: "What information do we collect?\nWe collect information from you when you respond to a survey or Click on a deal/special.\nWhen ordering or registering on our site, as appropriate, you may be asked to enter your: e-mail address. You may, however, visit our site anonymously.\n\nWhat do we use your information for?\n\nAny of the information we collect from you may be used in one of the following ways:\n\nTo personalize your experience\n(your information helps us to better respond to your individual needs)\n\nTo improve our website\n(we continually strive to improve our website offerings based on the information and feedback we receive from you)\n\nTo improve customer service\n(your information helps us to more effectively respond to your customer service requests and support needs)\n\nHow do we protect your information?\n\nWe implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.\n\n Do we use cookies?\n\nWe do not use cookies.\n\nDo we disclose any information to outside parties?\n\nWe do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.\n\nThird party links\n\nOccasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.\n\nChildrens Online Privacy Protection Act Compliance\n\nWe are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older.Your Consent\n\nBy using our site, you consent to our online privacy policy.\n\nChanges to our Privacy Policy\n\n If we decide to change our privacy policy, we will post those changes on this page.\n\nContacting Us\n\nIf there are any questions regarding this privacy policy you may contact us using the information below.\n\ngenyapps.com\ngenyapps@gmail.com\n", 
	top: 0, 
	width: '100%',
	backgroundColor: whiteColor,  
	height: 'auto'
});
privacybackButton.addEventListener('click', function(){
	privacyview.animate({
		bottom: screen_height
	});
});

MainWindow.add(privacyview);
privacyview.add(privacyTitle);
privacyTitle.add(privacybackButton);
privacybackButton.add(privacyBackBt_img);
privacyview.add(textview);
textview.add(text);

function openPrivacy(){
	privacyview.animate({
		bottom: 0
	});
}