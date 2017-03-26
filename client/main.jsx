import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { mount } from 'react-mounter';

import AppContainer from '../imports/ui/App.jsx';



FlowRouter.route('/walmart/:query', {
    action: function(params, queryParams) {
        console.log("Walmart", params.postId);
				mount(AppContainer, params.query);
    }
});

FlowRouter.route('/', {
    action: function(params, queryParams) {
        console.log("Yeah! We are on the post:", params.postId);
        mount(AppContainer);
    		// render(<App />, document.getElementById('render-target'));
    }
});

Meteor.startup(() => {

});