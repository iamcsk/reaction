import React, { Component } from "react";
import PropTypes from "prop-types";
import { Components } from "@reactioncommerce/reaction-components";
import { ReactionLayout } from "/imports/plugins/core/layout/lib";

class ProductDetail extends Component {
  get tags() {
    return this.props.tags || [];
  }

  get product() {
    return this.props.product || {};
  }

  get editable() {
    return this.props.editable;
  }

  render() {
    return (
      <div className="pdp" style={{ position: "relative" }}>
        <div className="container-main pdp-container" itemScope itemType="http://schema.org/Product">
          <div className="row">
            <Components.Alerts placement="productManagement" />
            <ReactionLayout
              context={this}
              layoutName={this.props.layout}
              layoutProps={this.props}
            />
          </div>
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  editable: PropTypes.bool, // eslint-disable-line react/boolean-prop-naming
  hasAdminPermission: PropTypes.bool,
  layout: PropTypes.string,
  layoutName: PropTypes.string,
  mediaGalleryComponent: PropTypes.node,
  onDeleteProduct: PropTypes.func,
  onProductFieldChange: PropTypes.func,
  priceRange: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  product: PropTypes.object,
  socialComponent: PropTypes.node,
  tags: PropTypes.arrayOf(PropTypes.object),
  topVariantComponent: PropTypes.node
};

export default ProductDetail;
