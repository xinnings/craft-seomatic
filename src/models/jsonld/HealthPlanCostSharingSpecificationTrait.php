<?php
/**
 * SEOmatic plugin for Craft CMS 4
 *
 * A turnkey SEO implementation for Craft CMS that is comprehensive, powerful,
 * and flexible
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2022 nystudio107
 */

namespace nystudio107\seomatic\models\jsonld;

/**
 * schema.org version: v14.0-release
 * Trait for HealthPlanCostSharingSpecification.
 *
 * @author    nystudio107
 * @package   Seomatic
 * @see       https://schema.org/HealthPlanCostSharingSpecification
 */

trait HealthPlanCostSharingSpecificationTrait
{
    
    /**
     * Whether The rate of coinsurance expressed as a number between 0.0 and 1.0.
     *
     * @var float|Number
     */
    public $healthPlanCoinsuranceRate;

    /**
     * Whether the coinsurance applies before or after deductible, etc. TODO: Is
     * this a closed set?
     *
     * @var string|Text
     */
    public $healthPlanCoinsuranceOption;

    /**
     * The category or type of pharmacy associated with this cost sharing.
     *
     * @var string|Text
     */
    public $healthPlanPharmacyCategory;

    /**
     * Whether The copay amount.
     *
     * @var PriceSpecification
     */
    public $healthPlanCopay;

    /**
     * Whether the copay is before or after deductible, etc. TODO: Is this a
     * closed set?
     *
     * @var string|Text
     */
    public $healthPlanCopayOption;

}
