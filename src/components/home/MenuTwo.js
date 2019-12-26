import React from 'react'

const Menu = () => {
    return (
        <section id="menu" className="menu">
            <div className="container">
                <h2 className="section-header text-center">Our Menu</h2>
        <div className="menu">
            <ul role="tablist" className="nav nav-tabs text-center has-border d-flex justify-content-center">
                <li role="presentation" className="nav-item"><a href="#starters" aria-controls="starters" role="tab" data-toggle="tab" class="nav-link active">starters</a></li>
                <li role="presentation" className="nav-item"><a href="#pasta" aria-controls="pasta" role="tab" data-toggle="tab" class="nav-link">pasta</a></li>
                <li role="presentation" className="nav-item"><a href="#mains" aria-controls="mains" role="tab" data-toggle="tab" class="nav-link">mains</a></li>
                <li role="presentation" className="nav-item"><a href="#wines" aria-controls="wines" role="tab" data-toggle="tab" class="nav-link">wines</a></li>
            </ul>
            <div className="tab-content">
            <div id="starters" role="tabpanel" className="tab-pane active">
            <div className="row">
            <div className="col-lg-12">
                <div className="menu-item has-border clearfix recommended">
                    <div className="item-details pull-left">
                        <h5>Breads</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
            <div className="menu-item has-border clearfix">
            <div className="item-details pull-left">
                <h5>Garlic Bread</h5>
                <p>Garlic butter bread, oven toasted with parsley </p>
            </div>
            <div className="item-price-standard pull-right"><strong className="text-large text-primary">5.90</strong>
            </div>
            </div>
        </div>
        <div className="col-lg-6">
        <div className="menu-item has-border clearfix">
            <div className="item-details pull-left">
                <h5>Piadina</h5>
                <p>Baked pizza dough bread flavoured with a light spread of tomato sauce, olive oil, chilli, & rosemary</p>
            </div>
                <div className="item-price-standard pull-right"><strong className="text-large text-primary">8.90</strong>
            </div>
            </div>
        </div>
        <div className="col-lg-6">
        <div className="menu-item has-border clearfix">
          <div className="item-details pull-left">
            <h5>Grissini Parma</h5>
            <p>Freshly baked breadsticks wrapped with slices of succulent Italian Parma Ham </p>
          </div>
          <div className="item-price-standard pull-right"><strong className="text-large text-primary">14.80</strong><span class="text-medium"></span>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="menu-item has-border clearfix">
          <div className="item-details pull-left">
            <h5>Bruschetta al Capriccio</h5>
            <p>Fresh tomato cubes seasoned with olive oil, garlic and oregano, topped on slices of oven toasted bread </p>
          </div>
          <div className="item-price-standard pull-right"><strong className="text-large text-primary">12.90</strong>
          </div>
        </div>
      </div>


    <div id="pasta" role="tabpanel" className="tab-pane fade">
        <div className="row">
        <div class="col-lg-12">
            <div className="menu-item has-border clearfix recommended">
                <div className="item-details pull-left">
                    <h5>Olive Oil Based Sauces</h5>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
        <div className="menu-item has-border clearfix">
          <div className="item-details pull-left">
            <h5>San Giovannese</h5>
            <p>Classic sauce of cherry tomatoes, black olives, capers, garlic, chilli and parmesan cheese</p>
          </div>
          <div className="item-price-standard pull-right"><strong className="text-large text-primary">20.90</strong>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="menu-item has-border clearfix">
          <div className="item-details pull-left">
            <h5>Alla Pastora</h5>
            <p>Shepherd inspired sauce of bacon and mushrooms sautéed in olive oil, garlic and chilli</p>
          </div>
          <div className="item-price-standard pull-right"><strong className="text-large text-primary">21.90</strong>
          </div>
        </div>
      </div>


        </div>
        </div>

            </div>
            </div>
            </div>
        </div>
            </div>
        </section>
    )
}

export default Menu