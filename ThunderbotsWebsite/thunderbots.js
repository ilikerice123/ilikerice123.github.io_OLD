//not sure if I have to title these js files with anything lol

//creating the menu
function initMenu(){
  var menu = $('<nav></nav>', {
    "id":"menu",
    "class":"navbar navbar-expand-lg menu-top",
  });

  var title = $('<a></a>', {
    "class": "navbar-brand ml-3 mr-5",
    "href" : "http://ilikerice123.github.io/ThunderbotsWebsite/",
  }).html("<strong>UBC THUNDERBOTS</strong>");

  var hamburger = $('<button></button>', 
  {
    "class": "navbar-toggler",
    "type" : "button",
    "data-toggle" : "collapse", 
    "data-target" : "#navbarSupportedContent",
    "aria-controls" : "navbarSupportedContent",
    "aria-expanded" : "false",
    "aria-label" : "Toggle navigation"
  }).html('<i class="fas fa-bars"></i>');
  
  var menuContents = $('<ul></ul>',{
    "class": "navbar-nav mr-auto",
  });

//   can be useful later for adding social media links <form class="form-inline my-2 my-lg-0">
//   <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
//   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
// </form>

//edit this part to add more to the menu
  var about = {"name" : "About", "link":"#"};
  about["contents"] = [];
  about["contents"].push({"name":"Our Mission", "link":"http://ilikerice123.github.io/ThunderbotsWebsite/Mission/"});
  about["contents"].push({"name":"Prospective Members", "link":"http://ilikerice123.github.io/ThunderbotsWebsite/ProspectiveMembers"});
  menuContents.append(createDropdown(about));

  var teams = {"name" : "Teams", "link":"#"};
  teams["contents"] = [];
  teams["contents"].push({"name": "Admin", "link":"http://ilikerice123.github.io/ThunderbotsWebsite/Admin"});
  teams["contents"].push({"name": "Mechatronics", "link":"http://ilikerice123.github.io/ThunderbotsWebsite/Mechatronics"});
  teams["contents"].push({"name": "Software", "link":"http://ilikerice123.github.io/ThunderbotsWebsite/Software"});
  menuContents.append(createDropdown(teams));

  var demos = {"name" : "Demos", "link":"http://ilikerice123.github.io/ThunderbotsWebsite/Demos"};
  menuContents.append(createDropdown(demos));

  var sponsor = {"name":"Sponsor", "link": "#"};
  sponsor["contents"] = [];
  sponsor["contents"].push({"name": "Become A Sponsor", "link":"http://ilikerice123.github.io/ThunderbotsWebsite/SponsorUs"});
  sponsor["contents"].push({"name": "Our Sponsors", "link":"http://ilikerice123.github.io/ThunderbotsWebsite/OurSponsors"});
  menuContents.append(createDropdown(sponsor));

  var contact = {"name" : "Contact", "link":"http://ilikerice123.github.io/ThunderbotsWebsite/ContactUs"};
  menuContents.append(createDropdown(contact));

  var menuContentWrapper = $('<div></div>',{
    "class":"collapse navbar-collapse",
    "id":"navbarSupportedContent"
  }).html(menuContents);

  menu.append(title);
  menu.append(hamburger);
  menu.append(menuContentWrapper);
  $("body").prepend(menu);
}

function createDropdown(obj){
  //if array empty, make link with headingtitle
  //id = headingtitle.name.lowercase + "Dropdown"
  var list = $('<li></li>',{"class" : "nav-item mr-2"});
  
  var title = $('<a></a>', {
    "class":"nav-link",
    "href":obj.link,
    "id":obj.name.toLowerCase() + "Dropdown",
    "role":"button",
  }).html(obj.name);

  //if it is a dropdown
  if(obj.contents != null){
    title.attr("data-toggle","dropdown");
    title.attr("aria-haspopup","true");
    title.attr("aria-expanded","false");
    title.append('<i class="fas fa-chevron-down"></i>');
    list.addClass("dropdown");
    list.append(title);
    
    var div = $('<div></div>', {
      "class":"dropdown-menu",
      "aria-labelledby":"navbarDropdown",
    });
    div.append(dropdownItem(obj.contents[0]));
    for(var i = 1; i < obj.contents.length; i++){
      div.append('<div class="dropdown-divider"></div>');
      div.append(dropdownItem(obj.contents[i]))
    }
    list.append(div);
  }
  else {
    list.append(title);
  }

  return list;
}

function dropdownItem(obj){
  return $("<a></a>",{
    "class":"dropdown-item",
    "href":obj.link,
  }).html(obj.name);
}

function scrollMenu(){
  if($(window).scrollTop() > 0){
    $("#menu").removeClass("menu-top");
    $("#menu").addClass("menu-follow");
  }
  else {
    $("#menu").removeClass("menu-follow");
    $("#menu").addClass("menu-top");
  }
}

$(function(){
  initMenu();
  scrollMenu();

  $(window).scroll(function(){
    console.log($(window).scrollTop());
    scrollMenu();
  })
})