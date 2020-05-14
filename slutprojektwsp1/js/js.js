function initMovement() 
{
    var speed = 100;
    var ballHeight = parseInt(window.getComputedStyle(document.getElementById('ball')).getPropertyValue('height'),10);
    var terrainHeight = parseInt(window.getComputedStyle(document.getElementById('terrain')).getPropertyValue('height'),10);