# **JSON Directions API**
## Directions from Peterborough City Hall to Fleming College Frost Campus
###### https://maps.googleapis.com/maps/api/directions/json?origin=place_id:ChIJB-rd7ZSM1YkR--mMbjZpIyE&destination=place_id:ChIJq6p6ZumM1YkRwlenRs5y5SY&key=AIzaSyBbX6WSBFcw8q7lEOTlHsK5HvQotMBtJQs

```
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJB-rd7ZSM1YkR--mMbjZpIyE",
         "types" : [
            "city_hall",
            "establishment",
            "local_government_office",
            "point_of_interest"
         ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJq6p6ZumM1YkRwlenRs5y5SY",
         "types" : [
            "book_store",
            "establishment",
            "point_of_interest",
            "store",
            "university"
         ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 44.3496369,
               "lng" : -78.320286
            },
            "southwest" : {
               "lat" : 44.2922898,
               "lng" : -78.74589209999999
            }
         },
         "copyrights" : "Map data ©2021 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "42.6 km",
                  "value" : 42625
               },
               "duration" : {
                  "text" : "41 mins",
                  "value" : 2485
               },
               "end_address" : "200 Albert St S, Lindsay, ON K9V 5E6, Canada",
               "end_location" : {
                  "lat" : 44.3410364,
                  "lng" : -78.7416585
               },
               "start_address" : "500 George St N, Peterborough, ON K9H 3R9, Canada",
               "start_location" : {
                  "lat" : 44.3093686,
                  "lng" : -78.32034519999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 112
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 44.3083657,
                        "lng" : -78.320286
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eGeorge St N\u003c/b\u003e toward \u003cb\u003eMurray St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "qdmmGd}_}MnAEhBEL?"
                     },
                     "start_location" : {
                        "lat" : 44.3093686,
                        "lng" : -78.32034519999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 265
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 59
                     },
                     "end_location" : {
                        "lat" : 44.308238,
                        "lng" : -78.32361190000002
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMurray St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "i~lmGx|_}MFrEHzFFfE"
                     },
                     "start_location" : {
                        "lat" : 44.3083657,
                        "lng" : -78.320286
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 739
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 108
                     },
                     "end_location" : {
                        "lat" : 44.3148781,
                        "lng" : -78.3240165
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAylmer St N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "o}lmGpq`}M}EL[@kCHkBF}FBkADc@@iCHc@@wEJe@Dc@D"
                     },
                     "start_location" : {
                        "lat" : 44.308238,
                        "lng" : -78.32361190000002
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 234
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 29
                     },
                     "end_location" : {
                        "lat" : 44.31421530000001,
                        "lng" : -78.32680569999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eParkhill Rd W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_gnmGbt`}MV|AJn@NdARvA^nCZpB"
                     },
                     "start_location" : {
                        "lat" : 44.3148781,
                        "lng" : -78.3240165
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.8 km",
                        "value" : 4847
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 405
                     },
                     "end_location" : {
                        "lat" : 44.3496369,
                        "lng" : -78.3622434
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eChemong Rd\u003c/b\u003e (signs for \u003cb\u003eBridgenorth\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Road 18\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{bnmGpea}MwArA{@v@s@n@eBhBwBrBgBbBc@b@mBhBk@h@uAtAoAlAyAtAcC~BaC|BkAhAmAjAmChCqAlAi@h@WHw@j@]\\yBpBcCzByBzB[ZUb@cA~@iBbBy@v@o@p@MB{ArAg@d@s@r@KJc@d@URgAnAILiAbA]\\{@v@uAzAk@l@sBvBo@p@yC|CqDvDwAxAuAxAaIjIiBlBu@t@aBfBuArAqBpBe@d@aB|AsCpCgGbGuBrBuBpBk@r@uA`BqIlIu@x@eBhBy@z@[\\y@|@y@z@qBvB]\\uAzA[\\uAxA]\\qBvB}AbBiAlAe@d@wEzE"
                     },
                     "start_location" : {
                        "lat" : 44.31421530000001,
                        "lng" : -78.32680569999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "6.9 km",
                        "value" : 6885
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 351
                     },
                     "end_location" : {
                        "lat" : 44.3272368,
                        "lng" : -78.44237059999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLindsay Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePeterborough County Rd 1\u003c/b\u003e (signs for \u003cb\u003eCounty Road 1 W\u003c/b\u003e)",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "g`umG~bh}Mh@pApB|Ex@pB~@fCTl@~A~D`AfCrAhDlA`DN`@fCtGHRz@zBTh@Vr@z@nBRf@h@pA~@xBXn@N^rArDxB~G^|AV`Ah@fDdAxGV`B`@lCT~A`@nC`@lCfBlLj@|D`@nC`@nCl@|D`@nCzAzJT~A`@nCV|AT~ApB|Ml@|DlAlInAlIDVl@xDj@~Dl@`Et@nF^nCT~A`A~G^pCJl@j@|DbA|G?Bb@jChBhLXfBhAvGt@fF`@lC^nCbA~GJl@t@nFv@lFnB|MJn@`@tClAbIxBzNh@pDd@~CLv@j@|D~AfLRtAN`AL~@h@lDl@nED^b@~Cv@bFtA~J\\bCh@tD@p@P|A"
                     },
                     "start_location" : {
                        "lat" : 44.3496369,
                        "lng" : -78.3622434
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "27.3 km",
                        "value" : 27256
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1267
                     },
                     "end_location" : {
                        "lat" : 44.3255151,
                        "lng" : -78.7396502
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eHwy 7\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTrans-Canada Hwy\u003c/b\u003e",
                     "polyline" : {
                        "points" : "gtpmGxww}M^nC`@rCPd@VtBBPNbAZ|B`@xCf@nDBNJv@RvAJv@Hf@TfBHf@TfBHf@R~A@FHf@Hn@~@~GTfBFh@`@vCFf@^nC@Fp@fF@Ff@vD@Ff@vD@Fh@|Dl@rENlAFf@z@hGPlA`@lCJn@Z|BDPfAzGr@rEtBlMrAjIv@xERpAV|AV~Ab@lCfAzGLt@b@jCn@`E|ApJN`ARjAr@pEFZXfB^dC@JH`@d@zCj@pDBRFXT~ADVDVV|A\\zBn@`Ef@|C@JFb@TzAb@pCJl@@B`@jCNdAPfAn@|DV|AHn@Jn@XfBpBhMz@tFBP\\zBJn@VbBJj@Hl@Jp@b@jC?@\\xBBRJn@\\|BBNJn@Jt@`@nCTvAL|@RpAVhBHb@`@nC@H^bCHd@l@~DVfBJn@`@nCv@lFb@lCh@hDp@lEJl@ZnBF^NdADVLz@RpAn@`EFZ`@lCd@dDp@hEXpB|@pFjAhHj@jDdB`Lt@`FjAlIh@vD`@~Ch@|D~@hGZ|BFXHj@BTV`Bb@vCh@lDvDfW^`CL|@`AhGx@lFj@pDPfAjCzP`@lCb@lCHn@j@rDh@bDn@~DPdAt@pEfA|GZjBRnAx@~Ed@tCV|ANz@V|AhAnHr@hERhAHn@XdB^~BjA~HfAlHn@dEHh@|BjOVfBJn@Jl@Jz@nAhIl@|DJr@tAfJbA|GzA`KfAlHl@|DXlBh@lDXjBVdBRrAf@dDF^TvAr@vEb@vC\\fCHp@Ft@Dd@@ZB\\@h@?d@?L?f@?P?TCp@ATARAPCd@E^Eb@EVCXCHGb@ADIb@I\\Or@Uz@Qj@W`AYbAMh@Y~@IZOj@Sr@]pAw@tCABYbAg@lBABk@rBSx@Mb@]lAk@tBe@fBg@dBQr@IXk@rBMb@q@dC_AjD_@pAc@bBe@dBy@~CSr@qAzE{CnKq@~Bm@pBu@bCe@`BGNw@lC_@jAOh@c@xAM^}@zCaA`Ds@bCSr@gArD_A`D_AzCo@xBs@`Cs@zBq@xBo@xBg@bBu@`CQl@_@lAUv@GR[bASr@CHUr@cA`DiAhDmAfDm@bBcAfCsB`FkAvCw@nBo@|AO`@cAdCg@lAQ`@q@bBo@|A]z@Yp@O\\CDYn@MV[n@g@z@W`@_@j@SXQTY^]`@c@d@_@^YVuArA_BxAuBnB_BzAaBzA}AxAgAfAe@h@c@j@a@j@e@v@MTe@|@e@bAWn@]`AW|@Oh@Qv@Kd@UdAO~@Kz@Ed@Gl@E^AJAPC`@C`@EhAGbBC`AMjD?HI|BEdACnAEz@A`AAR?\\?x@?t@@^@^@d@Bh@HjAD^B\\@FHl@D`@VdB\\fCV~A~@pG|@fGbAbHnBdNb@tCfAdIj@xD^lC\\~Bt@nFJl@j@~DJn@j@~DHn@Hh@PlADTPpAT~A`@tCVfBBRFZHh@Jp@RtAN`ANbAXrBHl@J~@Hv@@DF`ADx@@LBnA@bA?~@An@ALCpAEx@ANE^Gp@In@Gn@Ih@CHG^Kd@EVUz@IZGRMb@Ob@O`@?BIRITGLMXO\\S`@U`@Yd@]f@o@z@a@b@WXg@d@a@\\[Te@\\SJOHs@^c@Pm@T_AZw@Xa@LoFjBc_@lMa@NcPtFcA^KBkBn@qAb@m@PYJUHMDm@Po@T}@X}@X{@V_Bh@}@X_AZoBn@g@NyAd@u@Vk@R}@XKBc@No@Rw@VcAZeBj@cA^k@Vm@\\GFYR_@Xa@`@UXSTQXSXCFYd@Ud@O\\Qb@Qj@Md@EPWnAEXIl@OtAE|@Cz@AlABhA@n@Dp@?@F~@Jz@XlBl@pElAnI@NXtB?BVvBN~ADh@DXHnAL`BBj@B^FdABrA@BDpB@`@D~ABvA?DVvFb@vFDj@N~A@JFh@Ff@Fd@Hv@TxAHj@Jj@BHD\\Lx@Lz@Jl@P~@Hd@H^VfAXlAXfA\\tAFVNh@Pl@Nf@@Bb@tA@Dh@|Ap@pBh@bBb@xARt@Pp@R|@VnAP|@L|@l@~DFj@^hCd@bD\\bC\\fCT`B|@hGj@rENfAHn@N|@XpBDZJ|@r@rFf@vD^jCRpAJp@Nv@P`AHj@NpAVjBh@rDl@|DHn@\\xBNdAr@lEh@jDJn@\\vB@Hz@dGp@~E"
                     },
                     "start_location" : {
                        "lat" : 44.3272368,
                        "lng" : -78.44237059999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1652
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 104
                     },
                     "end_location" : {
                        "lat" : 44.339681,
                        "lng" : -78.74589209999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAngeline St S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKawartha Lakes County Rd 4\u003c/b\u003e (signs for \u003cb\u003eCounty Road 4\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAngeline Street South\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "oipmGxyq_NgA\\eBj@wAf@kDjAMDQFoA^WLQFiE|AuIxCa@NiC|@eC|@mA`@}C`AgBh@yBr@iDdAc@PIDsAh@eCx@u@VqFfBcCv@eA\\"
                     },
                     "start_location" : {
                        "lat" : 44.3255151,
                        "lng" : -78.7396502
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 438
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 87
                     },
                     "end_location" : {
                        "lat" : 44.3420667,
                        "lng" : -78.7433776
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAuk Trail\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_bsmGx`s_N_@iCWsBEOEEA?KCSBSH_@Ja@NcAZo@R]LM?SAMEMKIQgA_H"
                     },
                     "start_location" : {
                        "lat" : 44.339681,
                        "lng" : -78.74589209999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 136
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 40
                     },
                     "end_location" : {
                        "lat" : 44.3414172,
                        "lng" : -78.7419474
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAlbert St S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}psmGbqr_NJKHIFKXaAr@}BPm@BM"
                     },
                     "start_location" : {
                        "lat" : 44.3420667,
                        "lng" : -78.7433776
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "20 m",
                        "value" : 20
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 44.34126,
                        "lng" : -78.7420679
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{lsmGdhr_N^V"
                     },
                     "start_location" : {
                        "lat" : 44.3414172,
                        "lng" : -78.7419474
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "41 m",
                        "value" : 41
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 13
                     },
                     "end_location" : {
                        "lat" : 44.3410364,
                        "lng" : -78.7416585
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{ksmG|hr_Nj@qA"
                     },
                     "start_location" : {
                        "lat" : 44.34126,
                        "lng" : -78.7420679
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "qdmmGd}_}MxDKL?FrEPbMyFNwFP}FBkADmDJ{FLiAJb@lC~A~KsCjCyCxCqJdJkUvT_FvEi@h@WHw@j@]\\}FlFuCvCUb@cA~@cDzCo@p@MBcCxB_A~@y@x@qA|AgB`B{@v@uAzA_DdDiEnEaTvTwI~ImKfK}JvJuBpBk@r@uA`BqIlI{CbDiErEeQbRoBrBwEzEh@pAjDnItAtDbIrS|EfMpGpOrArDxB~Gv@~ChDpT~Ifm@bKtq@pElZnD`WbC~PrCjRbCpOhAvGt@fF`A|GnAlIhFj^rGfc@zGbe@r@nFzAbKrBbOh@tD@p@p@lF`@rCPd@ZfCj@`ExApK~@~GrCvS`J`r@zBtO|C~RpLlt@~Gpb@bDvSdIrh@pL~u@fHte@xEh[nDnU|Gpc@vBtMzCbS`EbZvEj[fHpe@bGb`@zB~N`DzRvGfa@zCrRlErYbIfi@hT|wA`A~GPfBLhC?lBGpBQzBU~Ae@zByAlFmDpM{EjQuGdVcDzLsH~W}GdU}Kf_@iJ~ZkEpNwCpIqBjFgHfQgHfQ{@jBcAjBw@lA}ApBsDpDwK`KeD`DiAtAgAbBs@rA}@rBu@~Ba@`Ba@jB[zBMrAM~AUpG]xJM`F@lDPzDTrBrAnJpHbh@vDbXvEf\\dCbQx@rF~@dHXxDD|A@bCMhEYpC]bCq@tCu@|B[z@gAzBw@lAqA~A_A~@}@r@y@h@cAh@iE|Awh@vQ_VhIoDjAaM|D}MjEoEvAiDjAyAt@a@ZaAz@i@n@e@r@]l@e@bAc@nASv@]hBYbCIxB@vCNbD`DjUr@`Gd@rF\\rFLjFHvDV|Fz@nK`@nDn@zDl@`E|@lExAbGr@bC`CjHlA|Dd@fBj@lC^zBzBxOnCvRtAhK~A~LfBfM`@xBX|BxBlOjCxPfBvLp@~EgA\\}DrA{GxBi@T_PvF_KlDiPdFm@VsAh@eCx@gH~BiEtAw@}FKUMCg@LuDjA]LM?SAMEMKIQgA_HJKPUlA_ET{@^Vj@qA"
         },
         "summary" : "Hwy 7/Trans-Canada Hwy",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
```