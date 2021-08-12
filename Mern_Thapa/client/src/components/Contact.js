import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Contact = ()=>{
    return(
        <>
        <div>
        <div class="jumbotron jumbotron-sm">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <h1 className="h1">Contact us <small>Feel free to contact Me</small></h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                   <div className="well well-sm">
                        <form>
                        <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                            <label for="name">
                                                Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter name" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <label for="email">
                                                Email Address</label>
                                            <div class="input-group">
                                                <span className="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
                                                </span>
                                                <input type="email" class="form-control" id="email" placeholder="Enter email" required="required" /></div>
                                        </div>
                                        <div className="form-group">
                                            <label for="subject">
                                                Subject</label>
                                            <select id="subject" name="subject" className="form-control" required="required">
                                                <option value="na" selected="">Choose One:</option>
                                                <option value="service">General Customer Service</option>
                                                <option value="suggestions">Suggestions</option>
                                                <option value="product">Product Support</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="name">
                                                Message</label>
                                            <textarea name="message" id="message" className="form-control" rows="9" cols="25" required="required"
                                                placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <button type="submit" className="btn btn-primary pull-right" id="btnContactUs">
                                            Send Message</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <form>
                            <legend><span className="glyphicon glyphicon-globe"></span></legend>
                            <address>
                                <strong>Facebook, Inc.</strong><br/>
                                795 Folsom Ave, Suite 600<br />
                                India, CA 94107<br />
                                <abbr title="Phone">
                                    P:</abbr>
                                (123) 456-7890
                            </address>
                            <address>
                                <strong>Neelam Rana</strong><br />
                                <a href="mailto:#">neelamrana258@gmail.com</a>
                            </address>
                            </form>
                        </div>
                    </div>
            </div>
       </div>
        </>
    )
}
export default Contact