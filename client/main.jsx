import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { mount } from 'react-mounter';

import AppContainer from '../imports/ui/App.jsx';


FlowRouter.route('/', {
    action: function(params, queryParams) {
        mount(AppContainer);
    }
});

Meteor.startup(() => {

});