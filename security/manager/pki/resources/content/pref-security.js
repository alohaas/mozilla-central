/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*-
 *
 * The contents of this file are subject to the Mozilla Public
 * License Version 1.1 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of
 * the License at http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS
 * IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * rights and limitations under the License.
 *
 * The Original Code is mozilla.org code.
 *
 * The Initial Developer of the Original Code is Netscape
 * Communications Corporation.  Portions created by Netscape are
 * Copyright (C) 1998 Netscape Communications Corporation. All
 * Rights Reserved.
 *
 * Contributor(s):
 *  Javier Delgadillo <javi@netscape.com>
 *
 * Alternatively, the contents of this file may be used under the
 * terms of the GNU General Public License Version 2 or later (the
 * "GPL"), in which case the provisions of the GPL are applicable 
 * instead of those above.  If you wish to allow use of your 
 * version of this file only under the terms of the GPL and not to
 * allow others to use your version of this file under the MPL,
 * indicate your decision by deleting the provisions above and
 * replace them with the notice and other provisions required by
 * the GPL.  If you do not delete the provisions above, a recipient
 * may use your version of this file under either the MPL or the
 * GPL.
 */

function onLoad()
{
  parent.initPanel('chrome://pippki/content/pref-security.xul');
  var gBundleBrand = srGetStrBundle("chrome://global/locale/brand.properties");
  var bundle = srGetStrBundle("chrome://pippki/locale/pippki.properties");

  var brandName = gBundleBrand.GetStringFromName("brandShortName");
  var resetPrefs = bundle.formatStringFromName("resetPreferences",
                                               [ brandName ],
                                               1);
  setText("resetsettings.text", resetPrefs);
}

function openCertManager()
{
//  var windowReference = document.getElementById("certmanager");
//  if (windowReference != null) {
//    windowReference.focus();
//  } else {
    window.open('chrome://pippki/content/certManager.xul',  "",
                'chrome,width=500,height=400,resizable=1');
//  }
}
