/*
 * CoreShop.
 *
 * This source file is subject to the GNU General Public License version 3 (GPLv3)
 * For the full copyright and license information, please view the LICENSE.md and gpl-3.0.txt
 * files that are distributed with this source code.
 *
 * @copyright  Copyright (c) 2015-2020 Dominik Pfaffenbauer (https://www.pfaffenbauer.at)
 * @license    https://www.coreshop.org/license     GNU General Public License version 3 (GPLv3)
 *
 */

pimcore.registerNS('pimcore.plugin.datadefinitions.import_rule.actions.object');
pimcore.plugin.datadefinitions.import_rule.actions.object = Class.create(coreshop.rules.actions.abstract, {

    type: 'object',

    getForm: function () {
        this.object = Ext.create({
            xtype: 'textfield',
            fieldLabel: t('data_definitions_interpreter_object_id'),
            name: 'object',
            width: 500,
            value: this.data ? this.data.object : null
        });

        this.form = new Ext.form.Panel({
            items: [
                this.object
            ]
        });

        return this.form;
    },

    getValues: function () {
        return {
            object: this.object.getValue()
        };
    }
});
