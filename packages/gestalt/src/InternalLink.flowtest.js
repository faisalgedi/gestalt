// @flow strict
import React from 'react';
import InternalLink from './InternalLink.js';

const Valid = (
  <InternalLink wrappedComponent="button" href="https://example.com">
    content
  </InternalLink>
);

// $FlowExpectedError[prop-missing]
const MissingProp = <InternalLink />;

// $FlowExpectedError[prop-missing]
const NonExistingProp = <InternalLink nonexisting={33} />;
