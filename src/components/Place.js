import React from 'react';

class Place extends React.Component {

    render() {
        return (
            <li className="uk-padding-remove">
                <div className="uk-margin-left uk-margin-small-top">
                    <h3 className="uk-text-capitalize">Blackwall Hitch</h3>

                    <div data-uk-grid>
                        <div className="uk-width-1-2">
                            <div>
                                <p className="uk-text-small uk-text-meta uk-margin-remove-bottom">
                                    {'Distance:'}
                                </p>
                                <p className="uk-margin-remove-top">
                                    {'1.2 Miles'}
                                </p>
                            </div>

                            <div>
                                <p className="uk-text-meta uk-margin-remove-bottom">
                                    {'Type:'}
                                </p>
                                <p className=" uk-margin-remove-top">
                                    {'Rustic, American'}
                                </p>
                            </div>
                        </div>

                        <div className="uk-width-1-2">
                            <div>
                                <p className="uk-text-meta uk-margin-remove-bottom">
                                    {'Cost:'}
                                </p>
                                <p className=" uk-margin-remove-top">
                                    {'$$$'}
                                </p>
                            </div>

                            <div>
                                <p className="uk-text-meta uk-margin-remove-bottom">
                                    {'Rating:'}
                                </p>
                                <p className=" uk-margin-remove-top">
                                    {'5 Stars'}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </li>
        );
    }

}

export default Place;
