"use strict";

if (-1 || 0) alert( 'first' ); // выполнится, получится -1 true
if (-1 && 0) alert( 'second' ); // не выполнится, получится 0 false
if (null || -1 && 1) alert( 'third' );// выполнится, получится 1 true