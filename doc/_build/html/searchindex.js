Search.setIndex({docnames:["index","lcc","lcc.api","lcc.bin","lcc.data_manager","lcc.db_tier","lcc.db_tier.connectors","lcc.entities","lcc.stars_processing","lcc.stars_processing.deciders","lcc.stars_processing.deciders.unsupervised","lcc.stars_processing.descriptors","lcc.stars_processing.systematic_search","lcc.stars_processing.tools","lcc.stars_processing.utilities","lcc.tests","lcc.utils","setup"],envversion:50,filenames:["index.rst","lcc.rst","lcc.api.rst","lcc.bin.rst","lcc.data_manager.rst","lcc.db_tier.rst","lcc.db_tier.connectors.rst","lcc.entities.rst","lcc.stars_processing.rst","lcc.stars_processing.deciders.rst","lcc.stars_processing.deciders.unsupervised.rst","lcc.stars_processing.descriptors.rst","lcc.stars_processing.systematic_search.rst","lcc.stars_processing.tools.rst","lcc.stars_processing.utilities.rst","lcc.tests.rst","lcc.utils.rst","setup.rst"],objects:{"":{lcc:[1,0,0,"-"]},"lcc.api":{input_parse:[2,0,0,"-"],stars_handling:[2,0,0,"-"]},"lcc.api.input_parse":{parse_query_ranges:[2,1,1,""],parse_tun_query:[2,1,1,""]},"lcc.api.stars_handling":{getStars:[2,1,1,""],getStarsFromFolder:[2,1,1,""],getStarsFromRemoteDb:[2,1,1,""]},"lcc.bin":{create_project:[3,0,0,"-"],filter_stars:[3,0,0,"-"],make_filter:[3,0,0,"-"],plot_lcs:[3,0,0,"-"],prepare_query:[3,0,0,"-"]},"lcc.bin.create_project":{main:[3,1,1,""]},"lcc.data_manager":{filter_serializer:[4,0,0,"-"],package_reader:[4,0,0,"-"],prepare_package:[4,0,0,"-"],status_resolver:[4,0,0,"-"]},"lcc.data_manager.filter_serializer":{FiltersSerializer:[4,2,1,""]},"lcc.data_manager.filter_serializer.FiltersSerializer":{loadFilter:[4,3,1,""],saveFilter:[4,3,1,""]},"lcc.data_manager.package_reader":{PackageReader:[4,2,1,""]},"lcc.data_manager.package_reader.PackageReader":{EXCLUDE:[4,4,1,""],MODULE_EXTENSIONS:[4,4,1,""],NAMES:[4,4,1,""],getClasses:[4,5,1,""],getClassesDict:[4,5,1,""],getModuleClasses:[4,5,1,""],getPackageContents:[4,5,1,""]},"lcc.data_manager.prepare_package":{prepare_run:[4,1,1,""],rec:[4,1,1,""],tree:[4,1,1,""]},"lcc.data_manager.status_resolver":{StatusResolver:[4,2,1,""]},"lcc.data_manager.status_resolver.StatusResolver":{DELIMITER:[4,4,1,""],NUM_STATUS_INFO:[4,4,1,""],getQueries:[4,3,1,""],getUnsearchedQuery:[4,5,1,""],getWithStatus:[4,3,1,""],get_with_status:[4,6,1,""],save_lists_query:[4,5,1,""],save_query:[4,5,1,""]},"lcc.db_tier":{TAP_query:[5,0,0,"-"],base_query:[5,0,0,"-"],connectors:[6,0,0,"-"],stars_provider:[5,0,0,"-"],vizier_tap_base:[5,0,0,"-"]},"lcc.db_tier.TAP_query":{TapClient:[5,2,1,""]},"lcc.db_tier.TAP_query.TapClient":{COO_UNIT_CONV:[5,4,1,""],COUNTER_CON:[5,4,1,""],QUOTING:[5,4,1,""],REPEAT_CON:[5,4,1,""],SPECIAL_SYMB:[5,4,1,""],postQuery:[5,3,1,""]},"lcc.db_tier.base_query":{LightCurvesDb:[5,2,1,""],StarsCatalogue:[5,2,1,""]},"lcc.db_tier.base_query.LightCurvesDb":{getStarsWithCurves:[5,3,1,""]},"lcc.db_tier.base_query.StarsCatalogue":{coneSearch:[5,3,1,""],getStars:[5,3,1,""]},"lcc.db_tier.connectors":{asas_archive:[6,0,0,"-"],corot_archive:[6,0,0,"-"],file_manager:[6,0,0,"-"],kepler_archive:[6,0,0,"-"],macho_client:[6,0,0,"-"],ogleIII_archive:[6,0,0,"-"],ogle_client:[6,0,0,"-"]},"lcc.db_tier.connectors.asas_archive":{AsasArchive:[6,2,1,""]},"lcc.db_tier.connectors.asas_archive.AsasArchive":{DEC:[6,4,1,""],IDENT_MAP:[6,4,1,""],LC_META:[6,4,1,""],LC_URL:[6,4,1,""],MORE_MAP:[6,4,1,""],NAME:[6,4,1,""],RA:[6,4,1,""],TABLE:[6,4,1,""],TAP_URL:[6,4,1,""]},"lcc.db_tier.connectors.corot_archive":{CorotBrightArchive:[6,2,1,""],CorotFaintArchive:[6,2,1,""]},"lcc.db_tier.connectors.corot_archive.CorotBrightArchive":{IDENT_MAP:[6,4,1,""],LC_FILE:[6,4,1,""],LC_META:[6,4,1,""],LC_URL:[6,4,1,""],MORE_MAP:[6,4,1,""],NAME:[6,4,1,""],TABLE:[6,4,1,""]},"lcc.db_tier.connectors.corot_archive.CorotFaintArchive":{ERR_COL:[6,4,1,""],ERR_MAG_RATIO:[6,4,1,""],IDENT_MAP:[6,4,1,""],LC_META:[6,4,1,""],MAG_COL:[6,4,1,""],MORE_MAP:[6,4,1,""],NAME:[6,4,1,""],TABLE:[6,4,1,""],TIME_COL:[6,4,1,""]},"lcc.db_tier.connectors.file_manager":{FileManager:[6,2,1,""]},"lcc.db_tier.connectors.file_manager.FileManager":{DB_ORIGIN:[6,4,1,""],DEFAULT_STARCLASS:[6,4,1,""],FITS_CLASS:[6,4,1,""],FITS_DEC:[6,4,1,""],FITS_DEC_UNIT:[6,4,1,""],FITS_NAME:[6,4,1,""],FITS_RA:[6,4,1,""],FITS_RA_UNIT:[6,4,1,""],FITS_SUFFIX:[6,4,1,""],SUFFIXES:[6,4,1,""],getStarsWithCurves:[6,3,1,""],parseFileName:[6,6,1,""],writeToFITS:[6,5,1,""]},"lcc.db_tier.connectors.kepler_archive":{KeplerArchive:[6,2,1,""]},"lcc.db_tier.connectors.kepler_archive.KeplerArchive":{DEC_IDENT:[6,4,1,""],IDENTIFIER:[6,4,1,""],LC_META:[6,4,1,""],NAME:[6,4,1,""],RA_IDENT:[6,4,1,""],STAR_MORE_MAP:[6,4,1,""],getStars:[6,3,1,""],getStarsWithCurves:[6,3,1,""]},"lcc.db_tier.connectors.macho_client":{MachoDb:[6,2,1,""]},"lcc.db_tier.connectors.macho_client.MachoDb":{IDENT_MAP:[6,4,1,""],LC_FILE:[6,4,1,""],LC_META:[6,4,1,""],LC_URL:[6,4,1,""],MORE_MAP:[6,4,1,""],NAME:[6,4,1,""],TABLE:[6,4,1,""]},"lcc.db_tier.connectors.ogleIII_archive":{OgleIII:[6,2,1,""]},"lcc.db_tier.connectors.ogleIII_archive.OgleIII":{COL_MAP:[6,4,1,""],DEFAULT_DELTA:[6,4,1,""],LC_META:[6,4,1,""],MAX_TIMEOUT:[6,4,1,""],MORE:[6,4,1,""],ROOT:[6,4,1,""],SUFF:[6,4,1,""],getStars:[6,3,1,""],getStarsWithCurves:[6,3,1,""],postQuery:[6,3,1,""]},"lcc.db_tier.connectors.ogle_client":{OgleII:[6,2,1,""]},"lcc.db_tier.connectors.ogle_client.OgleII":{BVI_TARGETS:[6,4,1,""],COL_MAP:[6,4,1,""],LC_META:[6,4,1,""],MAX_TIMEOUT:[6,4,1,""],PHOT_TARGETS:[6,4,1,""],QUERY_TYPES:[6,4,1,""],ROOT:[6,4,1,""],getStars:[6,3,1,""],getStarsWithCurves:[6,3,1,""],postQuery:[6,3,1,""]},"lcc.db_tier.stars_provider":{StarsProvider:[5,2,1,""]},"lcc.db_tier.stars_provider.StarsProvider":{STARS_PROVIDERS:[5,4,1,""],getProvider:[5,5,1,""]},"lcc.db_tier.vizier_tap_base":{VizierTapBase:[5,2,1,""]},"lcc.db_tier.vizier_tap_base.VizierTapBase":{DEC:[5,4,1,""],DELIM:[5,4,1,""],ERR_COL:[5,4,1,""],ERR_MAG_RATIO:[5,4,1,""],LC_FILE:[5,4,1,""],MAG_COL:[5,4,1,""],RA:[5,4,1,""],TAP_URL:[5,4,1,""],TIME_COL:[5,4,1,""],getStars:[5,3,1,""],getStarsWithCurves:[5,3,1,""]},"lcc.entities":{exceptions:[7,0,0,"-"],light_curve:[7,0,0,"-"],star:[7,0,0,"-"]},"lcc.entities.exceptions":{ArgumentValidationError:[7,7,1,""],FailToParseName:[7,7,1,""],InvalidArgumentNumberError:[7,7,1,""],InvalidFile:[7,7,1,""],InvalidFilesPath:[7,7,1,""],InvalidFilteringParams:[7,7,1,""],InvalidOption:[7,7,1,""],InvalidReturnType:[7,7,1,""],LearningError:[7,7,1,""],MandatoryKeyInQueryDictIsMissing:[7,7,1,""],NoInternetConnection:[7,7,1,""],NotFilterTypeClass:[7,7,1,""],QueryInputError:[7,7,1,""],StarAttributeError:[7,7,1,""],StarAttributeNotSpecified:[7,7,1,""]},"lcc.entities.light_curve":{LightCurve:[7,2,1,""]},"lcc.entities.light_curve.LightCurve":{BAD_VALUES:[7,4,1,""],DEFAULT_META:[7,4,1,""],getAbbe:[7,3,1,""],getHistogram:[7,3,1,""],getMeanMag:[7,3,1,""],getStdMag:[7,3,1,""],getVariogram:[7,3,1,""],plotLC:[7,3,1,""]},"lcc.entities.star":{Star:[7,2,1,""]},"lcc.entities.star.Star":{EPS:[7,4,1,""],coo:[7,4,1,""],getDistance:[7,3,1,""],getIdentName:[7,3,1,""],getInRange:[7,3,1,""],lightCurve:[7,4,1,""],name:[7,4,1,""],putLightCurve:[7,3,1,""]},"lcc.stars_processing":{deciders:[9,0,0,"-"],descriptors:[11,0,0,"-"],stars_filter:[8,0,0,"-"],systematic_search:[12,0,0,"-"],tools:[13,0,0,"-"],utilities:[14,0,0,"-"]},"lcc.stars_processing.deciders":{custom_decider:[9,0,0,"-"],neuron_decider:[9,0,0,"-"],supervised_deciders:[9,0,0,"-"],unsupervised:[10,0,0,"-"]},"lcc.stars_processing.deciders.custom_decider":{CustomDecider:[9,2,1,""]},"lcc.stars_processing.deciders.custom_decider.CustomDecider":{evaluate:[9,3,1,""],learn:[9,3,1,""]},"lcc.stars_processing.deciders.neuron_decider":{NeuronDecider:[9,2,1,""]},"lcc.stars_processing.deciders.neuron_decider.NeuronDecider":{OUTPUT_NEURONS:[9,4,1,""],evaluate:[9,3,1,""],getTrainer:[9,3,1,""],learn:[9,3,1,""],train:[9,3,1,""]},"lcc.stars_processing.deciders.supervised_deciders":{GMMBayesDec:[9,2,1,""],GaussianNBDec:[9,2,1,""],LDADec:[9,2,1,""],QDADec:[9,2,1,""],SVCDec:[9,2,1,""],TreeDec:[9,2,1,""]},"lcc.stars_processing.deciders.supervised_deciders.TreeDec":{evaluate:[9,3,1,""]},"lcc.stars_processing.deciders.unsupervised":{k_means_decider:[10,0,0,"-"]},"lcc.stars_processing.deciders.unsupervised.k_means_decider":{KMeansDecider:[10,2,1,""]},"lcc.stars_processing.descriptors":{abbe_value_descr:[11,0,0,"-"],color_index_descr:[11,0,0,"-"],curve_density_descr:[11,0,0,"-"],curve_descr:[11,0,0,"-"],curve_shape_descr:[11,0,0,"-"],hist_shape_descr:[11,0,0,"-"],position_descriptor:[11,0,0,"-"],property_desc:[11,0,0,"-"],variogram_shape_descr:[11,0,0,"-"],variogram_slope_descr:[11,0,0,"-"]},"lcc.stars_processing.descriptors.abbe_value_descr":{AbbeValueDescr:[11,2,1,""]},"lcc.stars_processing.descriptors.abbe_value_descr.AbbeValueDescr":{LABEL:[11,4,1,""],getSpaceCoords:[11,3,1,""]},"lcc.stars_processing.descriptors.color_index_descr":{ColorIndexDescr:[11,2,1,""]},"lcc.stars_processing.descriptors.color_index_descr.ColorIndexDescr":{getSpaceCoords:[11,3,1,""]},"lcc.stars_processing.descriptors.curve_density_descr":{CurveDensityDescr:[11,2,1,""]},"lcc.stars_processing.descriptors.curve_density_descr.CurveDensityDescr":{LABEL:[11,4,1,""],getSpaceCoords:[11,3,1,""]},"lcc.stars_processing.descriptors.curve_descr":{CurveDescr:[11,2,1,""]},"lcc.stars_processing.descriptors.curve_descr.CurveDescr":{LABEL:[11,4,1,""],getSpaceCoords:[11,3,1,""]},"lcc.stars_processing.descriptors.curve_shape_descr":{CurvesShapeDescr:[11,2,1,""]},"lcc.stars_processing.descriptors.curve_shape_descr.CurvesShapeDescr":{AVAIL_METHODS:[11,4,1,""],LABEL:[11,4,1,""],getWord:[11,3,1,""],getWords:[11,3,1,""]},"lcc.stars_processing.descriptors.hist_shape_descr":{HistShapeDescr:[11,2,1,""]},"lcc.stars_processing.descriptors.hist_shape_descr.HistShapeDescr":{LABEL:[11,4,1,""],getWord:[11,3,1,""]},"lcc.stars_processing.descriptors.position_descriptor":{PositionDescriptor:[11,2,1,""]},"lcc.stars_processing.descriptors.position_descriptor.PositionDescriptor":{LABEL:[11,4,1,""],getSpaceCoords:[11,3,1,""]},"lcc.stars_processing.descriptors.property_desc":{PropertyDescr:[11,2,1,""]},"lcc.stars_processing.descriptors.property_desc.PropertyDescr":{LABEL:[11,4,1,""],getSpaceCoords:[11,3,1,""]},"lcc.stars_processing.descriptors.variogram_shape_descr":{VariogramShapeDescr:[11,2,1,""]},"lcc.stars_processing.descriptors.variogram_shape_descr.VariogramShapeDescr":{LABEL:[11,4,1,""],getWord:[11,3,1,""]},"lcc.stars_processing.descriptors.variogram_slope_descr":{VariogramSlopeDescr:[11,2,1,""]},"lcc.stars_processing.descriptors.variogram_slope_descr.VariogramSlopeDescr":{LABEL:[11,4,1,""],getSpaceCoords:[11,3,1,""]},"lcc.stars_processing.stars_filter":{StarsFilter:[8,2,1,""]},"lcc.stars_processing.stars_filter.StarsFilter":{evaluateCoordinates:[8,3,1,""],evaluateStars:[8,3,1,""],filterStars:[8,3,1,""],getSpaceCoordinates:[8,3,1,""],getStatistic:[8,3,1,""],learn:[8,3,1,""],learnOnCoords:[8,3,1,""]},"lcc.stars_processing.systematic_search":{stars_searcher:[12,0,0,"-"]},"lcc.stars_processing.systematic_search.stars_searcher":{StarsSearcher:[12,2,1,""]},"lcc.stars_processing.systematic_search.stars_searcher.StarsSearcher":{DEF_save_lim:[12,4,1,""],DEF_unfound_lim:[12,4,1,""],failProcedure:[12,3,1,""],filterStar:[12,3,1,""],matchOccured:[12,3,1,""],queryStars:[12,3,1,""],statusFile:[12,3,1,""]},"lcc.stars_processing.tools":{params_estim:[13,0,0,"-"],stats_manager:[13,0,0,"-"],visualization:[13,0,0,"-"]},"lcc.stars_processing.tools.params_estim":{ParamsEstimator:[13,2,1,""]},"lcc.stars_processing.tools.params_estim.ParamsEstimator":{evaluate:[13,3,1,""],evaluateCombinations:[13,3,1,""],fit:[13,3,1,""],saveOutput:[13,3,1,""]},"lcc.stars_processing.tools.stats_manager":{StatsManager:[13,2,1,""]},"lcc.stars_processing.tools.stats_manager.StatsManager":{getROC:[13,3,1,""],plotROC:[13,3,1,""],saveROCfile:[13,3,1,""],saveStats:[13,3,1,""]},"lcc.stars_processing.tools.visualization":{plot1DProbabSpace:[13,1,1,""],plot1DUnsupProbabSpace:[13,1,1,""],plot2DProbabSpace:[13,1,1,""],plot2DUnsupProbabSpace:[13,1,1,""],plotHist:[13,1,1,""],plotProbabSpace:[13,1,1,""],plotUnsupProbabSpace:[13,1,1,""]},"lcc.stars_processing.utilities":{base_decider:[14,0,0,"-"],base_descriptor:[14,0,0,"-"],compare:[14,0,0,"-"],sax:[14,0,0,"-"],superv_base_decider:[14,0,0,"-"],symbolic_representation:[14,0,0,"-"],unsupervised_base:[14,0,0,"-"]},"lcc.stars_processing.utilities.base_decider":{BaseDecider:[14,2,1,""]},"lcc.stars_processing.utilities.base_decider.BaseDecider":{evaluate:[14,3,1,""],evaluateList:[14,3,1,""],filter:[14,3,1,""],getBestCoord:[14,3,1,""],getStatistic:[14,3,1,""],learn:[14,3,1,""]},"lcc.stars_processing.utilities.base_descriptor":{BaseDescriptor:[14,2,1,""],Learnable:[14,2,1,""]},"lcc.stars_processing.utilities.base_descriptor.BaseDescriptor":{LABEL:[14,4,1,""],getSpaceCoords:[14,3,1,""]},"lcc.stars_processing.utilities.base_descriptor.Learnable":{getSpaceCoords:[14,3,1,""],learn:[14,3,1,""]},"lcc.stars_processing.utilities.compare":{ComparativeBase:[14,2,1,""]},"lcc.stars_processing.utilities.compare.ComparativeBase":{compareTwoStars:[14,3,1,""],getSpaceCoords:[14,3,1,""],loadCompStars:[14,3,1,""]},"lcc.stars_processing.utilities.sax":{DictionarySizeIsNotSupported:[14,7,1,""],OverlapSpecifiedIsNotSmallerThanWindowSize:[14,7,1,""],SAX:[14,2,1,""]},"lcc.stars_processing.utilities.sax.SAX":{A_OFFSET:[14,4,1,""],MAX_ALPH_SIZE:[14,4,1,""],MIN_ALPH_SIZE:[14,4,1,""],alphabetize:[14,3,1,""],build_letter_compare_dict:[14,3,1,""],compare_letters:[14,3,1,""],compare_strings:[14,3,1,""],to_letter_rep:[14,3,1,""]},"lcc.stars_processing.utilities.superv_base_decider":{SupervisedBase:[14,2,1,""]},"lcc.stars_processing.utilities.superv_base_decider.SupervisedBase":{evaluate:[14,3,1,""],learn:[14,3,1,""]},"lcc.stars_processing.utilities.symbolic_representation":{SymbolicRepresentation:[14,2,1,""]},"lcc.stars_processing.utilities.symbolic_representation.SymbolicRepresentation":{compareTwoStars:[14,3,1,""]},"lcc.stars_processing.utilities.unsupervised_base":{UnsupervisedBase:[14,2,1,""]},"lcc.stars_processing.utilities.unsupervised_base.UnsupervisedBase":{evaluate:[14,3,1,""],learn:[14,3,1,""]},"lcc.tests":{test_abbe_descriptor:[15,0,0,"-"],test_comp_descriptors:[15,0,0,"-"],test_connectors:[15,0,0,"-"],test_data_analysis:[15,0,0,"-"],test_filter:[15,0,0,"-"]},"lcc.tests.test_abbe_descriptor":{Test:[15,2,1,""]},"lcc.tests.test_abbe_descriptor.Test":{setUp:[15,3,1,""],testAbbe:[15,3,1,""]},"lcc.tests.test_comp_descriptors":{TestComparative:[15,2,1,""]},"lcc.tests.test_comp_descriptors.TestComparative":{setUp:[15,3,1,""],testCurveShape:[15,3,1,""],testHistShape:[15,3,1,""],testVarioShape:[15,3,1,""]},"lcc.tests.test_connectors":{Test:[15,2,1,""]},"lcc.tests.test_connectors.Test":{testAsas:[15,3,1,""],testCorotBright:[15,3,1,""],testCorotFaint:[15,3,1,""],testKepler:[15,3,1,""],testMacho:[15,3,1,""],testOgle:[15,3,1,""]},"lcc.tests.test_data_analysis":{Test:[15,2,1,""]},"lcc.tests.test_data_analysis.Test":{setUp:[15,3,1,""],testEqPAA:[15,3,1,""]},"lcc.tests.test_filter":{Test:[15,2,1,""]},"lcc.tests.test_filter.Test":{setUp:[15,3,1,""],tearDown:[15,3,1,""],testROC:[15,3,1,""]},"lcc.utils":{commons:[16,0,0,"-"],data_analysis:[16,0,0,"-"],helpers:[16,0,0,"-"],output_process_modules:[16,0,0,"-"],stars:[16,0,0,"-"]},"lcc.utils.commons":{Spinner:[16,2,1,""],accepts:[16,1,1,""],args_type:[16,1,1,""],check_attribute:[16,1,1,""],default_values:[16,1,1,""],mandatory_args:[16,1,1,""],returns:[16,1,1,""]},"lcc.utils.commons.Spinner":{busy:[16,4,1,""],delay:[16,4,1,""],spinner_task:[16,3,1,""],spinning_cursor:[16,6,1,""],start:[16,3,1,""],stop:[16,3,1,""]},"lcc.utils.data_analysis":{abbe:[16,1,1,""],computePrecision:[16,1,1,""],compute_bins:[16,1,1,""],histogram:[16,1,1,""],normalize:[16,1,1,""],sort_pairs:[16,1,1,""],to_PAA:[16,1,1,""],to_ekvi_PAA:[16,1,1,""],variogram:[16,1,1,""]},"lcc.utils.helpers":{checkDepth:[16,1,1,""],clean_path:[16,1,1,""],convertInputValue:[16,1,1,""],create_folder:[16,1,1,""],getArguments:[16,1,1,""],getMeanDict:[16,1,1,""],get_combinations:[16,1,1,""],progressbar:[16,1,1,""],subDictInDict:[16,1,1,""],verbose:[16,1,1,""]},"lcc.utils.output_process_modules":{loadFromFile:[16,1,1,""],saveIntoFile:[16,1,1,""]},"lcc.utils.stars":{plotStarsPicture:[16,1,1,""],saveStars:[16,1,1,""]},lcc:{api:[2,0,0,"-"],bin:[3,0,0,"-"],data_manager:[4,0,0,"-"],db_tier:[5,0,0,"-"],entities:[7,0,0,"-"],stars_processing:[8,0,0,"-"],tests:[15,0,0,"-"],utils:[16,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","classmethod","Python class method"],"6":["py","staticmethod","Python static method"],"7":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute","5":"py:classmethod","6":"py:staticmethod","7":"py:exception"},terms:{"2br":6,"2f247":6,"2f264":6,"2mass":6,"600x400":6,"abstract":14,"case":[2,5,6,12,15,16],"class":[2,4,5,6,7,8,9,10,11,12,13,14,15,16],"default":16,"float":[2,5,7,8,9,11,13,14,16],"function":[7,13,14,16],"int":[5,6,7,9,11,12,13,14,16],"new":5,"return":[2,4,5,6,7,8,9,11,12,13,14,16],"static":[4,6,16],"throw":11,"true":[4,5,6,7,8,11,13,14,16],CVS:6,EPS:7,For:[2,5,6,7,11,13,16],That:14,The:[6,9,12,16],Then:[9,14],There:[5,11,14,16],These:7,_de:6,_getlightcurv:5,_name:6,_ra:6,a_1:6,a_offset:14,abb:[7,11,16],abbe_bin:16,abbe_value_descr:[1,8],abbevalu:13,abbevaluedescr:11,abl:[7,14],about:[6,7,11,12],abov:[7,16],abs_v_mag:6,absolut:11,accept:[4,16],accepted_arg_typ:16,accepted_return_type_tupl:16,accord:[2,4,5,6,7,8,9,11,12,14,16],across:7,add:[7,16],addit:7,addition:[7,16],after:[2,8,12,14],again:7,age:16,aggreg:[14,16],all:[2,4,5,6,7,8,13,14,16],allow:9,along:16,alphabet:14,alphabet_s:[2,11,14],also:[6,9,12,14,16],amount:11,analysi:9,angl:7,ani:5,anoth:[4,7],anyth:11,anywai:[5,9],api:[0,1],append:5,appli:[8,14],approxim:[14,16],archiv:[5,6],arg:[8,11,12,14,16],args_opt:16,args_typ:16,argument:16,argumentvalidationerror:7,arrai:[7,9,16],arrrai:16,asa:6,asas3:6,asas_arch:[1,5],asas_id:6,asasarch:[5,6],ascens:[5,11],assign:[6,11],astronomi:7,astropi:[5,7],astrouw:6,attribut:[4,5,6,7,8,9,11,12,13,14,16],attribute_nam:11,attributeerror:7,author:15,automat:7,avail_method:11,averag:11,axi:[7,11,13],b_mag:[6,7,11],b_v_mag:6,bad_valu:7,ban:7,barycentr:6,base:[4,5,6,7,8,9,10,11,12,13,14,15],base_decid:[1,4,8,9],base_descriptor:[1,4,8,11],base_queri:[0,1,4,6],basedecid:[4,9,14],basedescriptor:[4,11,14],basefilt:4,basic:7,bay:9,bayesian:9,been:4,befor:16,belong:[9,14],below:[5,14,16],best:13,beta:14,between:[5,7,11,14,16],bin:[0,1,6,7,11,13,16],bins_num:16,bitmap:6,bjd:6,bmag:6,bool:[5,7,8,11,12,13,16],border:[9,13,14],boundari:9,bper:6,breakpoint:14,brief:5,bright_star:6,bring:5,build:14,build_letter_compare_dict:14,bul:6,busi:16,bvi:6,bvi_target:6,c_star:8,calcul:[8,11,16],call:[2,7,14],can:[4,5,6,7,9,11,12,14,16],capabl:14,car:6,cat:6,catalog:6,categori:7,cdsarc:6,center:[5,16],centr:[7,16],cepheid:[6,7],certain:[5,7,9,12,14,16],check:[9,16],check_attribut:16,checkdepth:16,classdoc:[10,14],classifi:14,classmethod:[4,5,6],clean:6,clean_path:16,clf:14,client:[5,6],clobber:[6,16],closest:11,col_map:6,color:[6,7,11,14],color_index_descr:[1,8],colorindexdescr:11,column:[4,5,13,16],combin:[2,13,16],comment:14,common:[0,1,5,6,14],comp_star:[11,14],compar:[1,7,8,11],compar_star:14,comparativebas:[11,14],compare_lett:14,compare_str:14,comparetwostar:14,compos:2,comput:[7,16],compute_bin:16,computeprecis:16,cond:16,condit:[5,8,16],cone:[5,6],conesearch:5,connector:[1,2,4,5,7,12],consequ:16,consid:[6,7,14,16],consist:[9,13],constant:13,construct:[4,5,7],cont_coo:13,contain:[2,4,5,6,7,9,14,16],contamin:[8,13,14],contaminatiom_coord:13,contamination_coord:13,contamination_star:14,content:0,convent:7,convers:5,convert:[5,14],convertinputvalu:16,coo:[5,7,11],coo_unit_conv:5,coord:[9,13,14],coordin:[5,6,7,8,9,11,12,13,14],corot:[5,6],corot_arch:[1,5],corotbrightarch:[5,6],corotfaintarch:[5,6],correct:16,correctli:[8,14],correspond:[9,16],could:16,couldn:16,count:[7,14],counter_con:5,creat:[5,7,13,14,15,16],create_fold:16,create_project:[0,1],current:5,current_path:4,curv:[2,5,6,7,11,12,13,14,16],curve_density_descr:[1,8],curve_descr:[1,8],curve_shape_descr:[1,8],curvedensitydescr:11,curvedescr:11,curvesshapedescr:11,custom_decid:[1,8],customdecid:9,dai:[6,7,11,16],dat:[6,13],data:[13,14,16],data_analysi:[0,1],data_manag:[0,1],databas:[2,4,5,6,7,12],datafram:[8,12],dataset:[9,16],days_per_bin:[7,11,16],db_ident:[6,7],db_kei:[2,7],db_name:2,db_origin:6,db_tier:[0,1,4],dec:[5,6],dec_id:6,dec_un:6,decid:[1,4,7,8,11,13,14],decis:9,decl:[6,16],declar:5,declin:[5,11],decor:16,deep_level:16,def:16,def_save_lim:12,def_unfound_lim:12,default_delta:6,default_meta:7,default_starclass:6,default_valu:16,degre:[5,7],dej2000:5,delai:16,delim:[4,5,6,13],delimit:[4,12,13],delta:6,delta_deg:5,deni:11,densiti:11,describ:11,descript:[5,6],descriptor:[1,4,8,9,13,14],desir:[2,4,11,14,16],despit:13,determin:14,deviat:[7,16],diagram:11,dict:[4,5,7,8,12,13,14,16],dict_list:16,dictionari:[2,4,5,6,7,12,13,16],dictionarysizeisnotsupport:14,differ:[2,5,7,11,14,16],dimens:[5,7,11,16],directli:14,directori:[2,4],discret:16,discrimin:9,displai:16,dissimilar:[11,14],distanc:[7,11,14],distribut:7,divid:[2,6,9],document:6,doe:16,dot:16,download:6,dynam:11,each:[5,7,9,11,13,16],edu:6,effect:5,electron:6,els:13,empti:[7,9],end:5,entiti:[0,1],enum_bi:2,epoch:9,eps:[7,16],epsilon:16,equal:7,err:[6,12],err_col:[5,6],err_mag_ratio:[5,6],error:12,etc:7,evalu:[9,13,14,16],evaluatecombin:13,evaluatecoordin:8,evaluatelist:14,evaluatestar:8,ever:16,everi:12,exampl:[2,5,6,7,11,13,16],except:[0,1,11,14,16],exclud:4,execut:[6,8,14],exist:[13,14,16],explain:14,express:5,extens:4,factor:14,fail:12,failprocedur:12,failtoparsenam:7,faint:6,faint_star:6,fals:[4,5,6,7,8,11,13,14,16],false_negative_r:[8,14],false_po:16,false_positive_r:[8,13,14],few:5,fi_nam:4,field:6,field_num:7,file:[2,4,5,6,12,13,16],file_manag:[1,5],file_nam:[4,6,13,16],file_path:6,filemanag:[5,6],filenam:6,files_limit:6,files_to_load:6,files_url:5,filter:[4,5,7,8,9,11,12,13,14],filter_seri:[0,1],filter_star:[0,1],filteringmanag:12,filtersseri:4,filterstar:[8,12],find:[9,13],first:[2,4,6,7,14,16],fit:[6,12,13,16],fits_class:6,fits_dec:6,fits_dec_unit:6,fits_nam:6,fits_ra:6,fits_ra_unit:6,fits_suffix:6,float_numb:2,flux:6,folder:[2,6,12,13,16],folder_nam:16,format:2,found:[5,12],four:5,from:[2,4,5,6,7,8,9,11,12,13,14,16],fulfil:8,func:16,function_arg:14,function_args_dict:14,g_mag:6,gap:11,gaussian:9,gaussiannbdec:9,gcvs_id:6,gener:[4,12],get:[2,4,5,7,8,9,11,13,14,16],get_combin:16,get_with_statu:4,getabb:7,getargu:16,getbestcoord:14,getclass:4,getclassesdict:4,getdist:7,gethistogram:7,getidentnam:7,getinrang:7,getmeandict:16,getmeanmag:7,getmoduleclass:4,getpackagecont:4,getprovid:[5,6],getqueri:4,getroc:13,getspacecoord:[11,14],getspacecoordin:8,getstar:[2,5,6],getstarsfromfold:2,getstarsfromremotedb:2,getstarswithcurv:[5,6],getstatist:[8,14],getstdmag:7,gettrain:9,getunsearchedqueri:4,getvariogram:7,getwithstatu:4,getword:11,give:16,given:[2,4,5,6,7,8,9,12,14,16],gmean:6,gmmbayesdec:9,got:[8,9,14],graph:16,greater:8,grid:9,group:[8,9,14],h_mag:6,has:[5,8,11,14,16],have:[4,5,8,11,14],header:4,helper:[0,1],hidden_neuron:9,hiden:9,hiden_neuron:9,higher:[9,14],highest:[8,13,14],hist:13,hist_bin:16,hist_shape_descr:[1,8],histogram:[7,11,13,16],histshapedescr:11,hjd:[6,7],hmag:6,html:9,http:[5,6,9],huge:11,i_ampl:6,i_mag:[6,11],id_asa:6,id_gcv:6,id_macho:6,id_not:16,id_ogle_ii:6,id_oth:6,ident:[6,7],ident_map:6,identifi:[2,4,6,7,8,14],if_not:16,ifnot:11,ifnotrais:16,imag:[6,16],immedi:13,implement:[5,8,9,11,14],incorrectli:[8,14],index:[0,7,11],indic:[14,16],indici:16,individu:14,inform:[6,7,8,12,14],inherit:[4,5,6,14],input:[9,13,16],input_neuron:9,input_pars:[0,1],insp_class:16,inspect:[8,9,11,12,14,16],instanc:[4,5,9,12,13,14],instead:11,integ:2,intend:14,interfac:5,invalidargumentnumbererror:7,invalidfil:7,invalidfilespath:7,invalidfilteringparam:7,invalidopt:7,invalidreturntyp:7,invert:7,invert_yaxi:[6,7],ioerror:7,item:[9,16],iter:[2,4,6,7,8,9,11,12,13,14,16],its:[4,5,7],j_mag:6,jmag:6,julian:6,just:[2,5,6,16],k_mag:6,k_means_decid:[1,8,9],keep:7,kei:[2,4,5,6,7,11,13,16],kepler:6,kepler_arch:[1,5],keplerarch:[5,6],keyword:5,kic_2mass_id:6,kic_dec:6,kic_degree_ra:6,kic_gmag:6,kic_hmag:6,kic_imag:6,kic_jmag:6,kic_kmag:6,kic_teff:6,kic_umag:6,kic_zmag:6,kmag:6,kmeansdecid:10,kplr:6,kwarg:[5,8,11,12,13,14,16],label:[11,13,14],lag:[7,11],larg:5,last:16,lc_file:[5,6],lc_meta:6,lc_url:6,lcc:0,lcs_fold:2,lda_qda:9,ldadec:9,learn:[8,9,14],learn_num:14,learnabl:14,learner:14,learningerror:7,learnoncoord:8,least:[8,13],length:[11,14,16],letter:[4,11,14],level:[14,16],librari:14,life:16,light:[2,5,6,7,11,12,14,16],light_curv:[0,1,2],lightcurv:[2,5,7],lightcurvesdb:[5,6],like:6,limit:11,linear:9,linear_model:9,list:[2,4,5,6,7,8,9,11,12,13,14,16],lmc:[6,7],lmc_sc1_1:7,load:[2,4,6,9,14,16],loadcompstar:14,loadfilt:4,loadfromfil:16,locat:[4,13,16],log_opt:[7,16],logarithm:16,longer:11,lookup:14,low:11,lower:[5,9,11],lowerest:13,lowest:8,lyra:7,machin:9,macho:6,macho_cli:[1,5],macho_id:6,macho_nam:6,machodb:[5,6],machovar:6,mag:[6,7],mag_col:[5,6],magnitud:[6,7,11,14],main:3,mainli:16,make:[6,16],make_filt:[0,1],manag:[4,5,6,12,14],mandatori:[13,16],mandatory_arg:16,mandatorykeyinquerydictismiss:7,mani:5,mar:15,mark:6,martin:15,match:[9,12],matchoccur:12,max:[7,13],max_alph_s:14,max_bin:[5,6],max_timeout:6,maxepoch:9,maximum:9,mean:[7,8,11,14,16],measur:16,member:14,membership:[8,9,14],merg:2,messag:[12,16],meta:7,metadata:[6,7],meth:[8,11],method:[2,4,5,6,7,8,9,10,11,12,13,14,15,16],methodnam:15,min:13,min_alph_s:14,miss:16,mjd:6,modul:0,module_extens:4,more:[2,6,7,11,14],more_map:6,moreov:14,most:5,my_macho_star:6,n_cluster:10,naiv:9,naive_bay:9,name:[2,4,5,6,7,12,13,16],nan:7,ndarrai:7,nearest:[5,6],necessari:5,need:[4,5,9,14],neg:[8,14],nest:[2,5,16],net:9,neuron:9,neuron_decid:[1,8],neurondecid:9,nick_nam:16,nointernetconnect:7,non:11,none:[2,4,5,7,8,9,11,12,13,14,16],nonetyp:[9,11,13,14,16],norm:[7,16],normal:16,note:12,notfiltertypeclass:7,nph:6,num_plot:16,num_status_info:4,number:[2,6,7,8,9,11,12,13,14,16],numer:14,numpi:[7,9,16],obj:16,object:[2,4,5,6,7,8,9,11,12,13,14,16],object_file_nam:6,observ:11,obtain:[5,14],obtain_method:[5,6],obtain_param:[5,6],obth_method:12,occur:12,ogl:6,ogle_cli:[1,5],ogle_ii_id:6,ogledb:6,ogleii:[5,6,7],ogleiii:[5,6],ogleiii_arch:[1,5],one:[6,8,13,14,16],onli:16,open:16,opt:13,option:[5,7,12,13,14,16],order:[2,4,13],ordereddict:6,org:9,origin:[6,7,16],other:[6,7,8,9,12,13,14],other_id:6,others_coord:8,otherwis:6,out:11,output:[9,13,16],output_neuron:9,output_process_modul:[0,1],overal:12,overlai:13,overlapspecifiedisnotsmallerthanwindows:14,overwrit:[4,5,13],overwritten:16,own:8,p_1:6,paa:16,paax:14,packag:0,package_nam:4,package_read:[0,1],packageread:4,page:0,panda:[8,12],param:[2,4,7,8,12,13,14],paramet:[2,4,5,7,8,9,11,12,13,14,16],params_estim:[1,8],params_spac:13,paramsestim:13,parent:4,pars:2,parse_query_rang:2,parse_tun_queri:2,parsefilenam:6,part:2,particular:[2,13,16],pass:[4,8,12,16],pass_method:8,pass_not_found:11,path:[2,4,5,6,12,13,16],per:[6,11,13,16],percentag:[2,13],perform:[12,16],period:6,period_b:6,period_r:6,phot:6,phot_target:6,photdb:6,php:6,pickl:[4,6,16],piecewis:[14,16],plan:4,pleas:7,plot1dprobabspac:13,plot1dunsupprobabspac:13,plot2dprobabspac:13,plot2dunsupprobabspac:13,plot:[6,7,13,14,16],plot_lc:[0,1],plot_rang:13,plot_save_path:14,plothist:13,plotlc:7,plotprobabspac:13,plotroc:13,plotstarspictur:16,plotunsupprobabspac:13,plu:6,pm_de:11,pm_ra:11,png:13,point:[6,11,13],posit:[8,9,11,14],position_descriptor:[1,8],positiondescriptor:11,possibl:[6,7],post:5,postqueri:[5,6],pramet:[9,14],precis:[8,14],prefix:16,preform:5,prepar:12,prepare_packag:[0,1],prepare_queri:[0,1],prepare_run:4,presenc:16,probabl:[8,9,13,14],process:16,progb_txt:2,progressbar:16,properli:13,properti:11,property_desc:[1,8],propertydescr:11,proport:[8,14],provid:[5,6],putlightcurv:7,pybrain:9,qdadec:9,qtype:6,quadrat:9,quantiti:[5,7],queri:[2,4,5,6,7,12,16],query_fil:4,query_file_in_inputs_fold:2,query_path:2,query_typ:6,queryinputerror:7,querystar:12,quot:5,r_mag:6,ra_id:6,ra_un:6,radiu:5,rais:16,raise_if_not:11,raj2000:5,rang:[2,5,7,9,11,13,16],rate:[5,11,16],ratio:[9,11,16],raw_param:2,read:[4,14],rec:4,recogn:[9,14],recommend:7,reconstruct:4,reduc:[5,11,16],reduct:16,regress:9,rel:16,remark:6,remot:2,remov:16,remove_kei:16,repeat_con:5,repres:14,represent:[11,14],respons:[4,6,7,8,9,14],result:[5,7,11,12,14,16],rev:16,right:[5,11],right_coord:[9,14],rmag:6,roc:13,roc_curv:13,roc_data_delim:13,roc_data_nam:13,roc_data_path:13,roc_plot:13,roc_plot_nam:13,roc_plot_path:13,roc_plot_titl:13,root:6,row:4,rper:6,run:[9,12],run_nam:4,runtest:15,s_star:8,same:14,sampl:[8,9,14],satisfi:16,save:[4,12,13,14,16],save_coord:12,save_lim:12,save_lists_queri:4,save_loc:16,save_param:13,save_path:[12,13],save_queri:4,saved_object:16,savefilt:4,saveintofil:16,saveoutput:13,saverocfil:13,savestar:16,savestat:13,sax:[1,8],scale:14,scaling_factor:14,scikit:9,score:13,score_func:13,search:[0,4,5,6,8,9,12,13,14],search_plan_fil:4,searched_coo:13,searched_coord:[8,13],searched_star:14,searcher:12,second:[6,7,14],see:[6,14,16],select:[5,8],self:11,separ:2,seqn:6,seri:[7,14,16],serial:16,server:5,set:[2,4,14,16],set_min:16,setup:[0,15],sever:14,sex:16,shift:[7,16],shorter:11,should:[5,6],show:[7,13,16],shown:7,simpler:16,sinc:16,singl:16,single_path:2,situat:5,size:[6,14,16],sklearn:[9,14],sky:11,sky_coordin:[5,7],skycoord:[5,7],slide:11,slope:[7,11],smc:6,some:[13,16],sort:[11,16],sort_pair:16,sourc:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],space:[8,9,12,13,14],special_symb:5,specif:[9,14],specifi:[2,4,6,7,9],spectral_typ:6,spinner:16,spinner_task:16,spinning_cursor:16,split_bi:2,split_ratio:13,spt:6,stabl:9,standard:[7,16],star1:11,star2:11,star:[0,1,2,4,5,6,8,9,11,12,13,14],star_class:[6,7],star_coord:[9,14],star_filt:[4,13],star_more_map:6,starattributeerror:7,starattributenotspecifi:7,starclass:7,starid:[6,7],stars_coord:[8,14],stars_filt:[0,1,12],stars_folder_kei:2,stars_handl:[0,1],stars_path:2,stars_process:[0,1,4],stars_provid:[0,1],stars_search:[1,8],starscatalog:5,starscatalogu:[4,5],starsfilt:[8,13],starsprovid:[5,6],starssearch:12,start:16,stat:[4,13],stat_file_path:12,static_param:13,statist:[8,13,14],stats_delim:13,stats_manag:[1,8],stats_nam:13,stats_path:13,statsmanag:13,statu:[4,12],status_file_path:4,status_head:4,status_queri:4,status_resolv:[0,1],statusfil:12,statusresolv:4,stellar:7,step:[2,16],stop:16,storag:5,store:[11,16],str:[2,4,5,6,7,8,11,12,13,14,16],strasbg:[5,6],string:[2,5,11,14],sub:[9,14],sub_dict:16,subclass:14,subdatabas:6,subdictindict:16,submodul:[0,1],subpackag:0,subtyp:6,suff:6,suffici:5,suffix:6,superv_base_decid:[1,8,9],supervis:14,supervised_decid:[1,8],supervisedbas:[9,14],superviseddataset:9,support:9,svcdec:9,svm:9,symbol:[2,5,11,14],symbolic_represent:[1,8,11],symbolicrepresent:[11,14],systemat:[4,12],systematic_search:[1,8],tabl:[5,6,12,14],take:[11,13,14],taken:[7,11],tap:[5,6],tap_param:5,tap_queri:[0,1],tap_url:[5,6],tapclient:5,tapvizi:[5,6],target:[4,6,7],teach:14,teardown:15,teff:6,temp:6,templat:[11,14,16],terrestri:6,test:[0,1,9,16],test_abbe_descriptor:[0,1],test_comp_descriptor:[0,1],test_connector:[0,1],test_data_analysi:[0,1],test_filt:[0,1],test_params_estim:[0,1],testabb:15,testasa:15,testcas:15,testcompar:15,testcorotbright:15,testcorotfaint:15,testcurveshap:15,testeqpaa:15,testhistshap:15,testkepl:15,testmacho:15,testogl:15,testroc:15,testvarioshap:15,text:[2,16],thei:[11,13,14],them:[4,5,14],thi:[2,4,5,6,7,8,9,11,12,14,16],three:16,thru:[4,8,11,12,14],tile:6,time:[6,7,11,16],time_col:[5,6],titl:13,to_ekvi_paa:16,to_letter_rep:14,to_paa:16,tool:[1,8],top:16,train:[8,9,13],transform:[14,16],translat:14,treat:16,tree:[4,9],treedec:9,treshold:[8,9,10,14],true_negative_r:[8,14],true_po:16,true_positive_r:[8,13,14],tune:13,tuned_param:13,tupl:[5,7,8,9,13,16],two:[6,7,9,14,16],txt:[4,6,16],type:[6,16],u_mag:6,unconstruct:13,unfound_lim:12,uninstanc:5,uniqu:7,unit:[5,7],unittest:15,unless:16,unsup_decid:4,unsupervis:[1,4,8,9],unsupervised_bas:[1,8,10],unsupervisedbas:[10,14],upper:5,url:5,use:[6,14],used:[6,7,9,11,12,14,16],user:[5,9],using:[5,6,11],util:[0,1,4,8,9,10,11],v_mag:[6,7,11],valid:[9,16],validationproport:9,valu:[2,4,5,7,8,9,11,13,14,16],valueerror:[7,14],var_typ:6,variabl:[6,7,16],vario_bin:16,variogram:[7,11,16],variogram_shape_descr:[1,8],variogram_slope_descr:[1,8],variogramshapedescr:11,variogramslopedescr:11,varioshapedescr:2,variou:16,vector:9,verb_level:16,verbos:16,veri:5,vgraph:6,via:[5,14],visual:[1,8],viz:6,vizier:[5,6],vizier_tap_bas:[0,1,6],vizierdb:6,viziertapbas:[5,6],vmag:6,well:[11,16],were:2,what:12,whenev:11,where:[4,11,12,13,16],whether:[7,12,13,14,16],which:[2,4,5,6,7,8,9,11,12,13,14,16],whole:2,witch:16,without:[6,11,16],without_notfound:11,word:[11,14],word_siz:14,work:[13,14],would:5,write:5,writetofit:6,wrong_coord:[9,14],x_lab:13,x_test:9,x_time:16,x_train:9,xlabel:[6,7],xlabel_unit:[6,7],y_lab:13,y_test:9,y_train:9,yet:4,ylabel:[6,7],ylabel_unit:[6,7],you:16,yourself:14,z_mag:6,zero:[7,16]},titles:["Welcome to LightCurvesClassifier&#8217;s documentation!","lcc package","lcc.api package","lcc.bin package","lcc.data_manager package","lcc.db_tier package","lcc.db_tier.connectors package","lcc.entities package","lcc.stars_processing package","lcc.stars_processing.deciders package","lcc.stars_processing.deciders.unsupervised package","lcc.stars_processing.descriptors package","lcc.stars_processing.systematic_search package","lcc.stars_processing.tools package","lcc.stars_processing.utilities package","lcc.tests package","lcc.utils package","setup module"],titleterms:{abbe_value_descr:11,api:2,asas_arch:6,base_decid:14,base_descriptor:14,base_queri:5,bin:3,color_index_descr:11,common:16,compar:14,connector:6,content:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],corot_arch:6,create_project:3,curve_density_descr:11,curve_descr:11,curve_shape_descr:11,custom_decid:9,data_analysi:16,data_manag:4,db_tier:[5,6],decid:[9,10],descriptor:11,document:0,entiti:7,except:7,file_manag:6,filter_seri:4,filter_star:3,helper:16,hist_shape_descr:11,indic:0,input_pars:2,k_means_decid:10,kepler_arch:6,lcc:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],light_curv:7,lightcurvesclassifi:0,macho_cli:6,make_filt:3,modul:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],neuron_decid:9,ogle_cli:6,ogleiii_arch:6,output_process_modul:16,packag:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],package_read:4,params_estim:13,plot_lc:3,position_descriptor:11,prepare_packag:4,prepare_queri:3,property_desc:11,sax:14,setup:17,star:[7,16],stars_filt:8,stars_handl:2,stars_process:[8,9,10,11,12,13,14],stars_provid:5,stars_search:12,stats_manag:13,status_resolv:4,submodul:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],subpackag:[1,5,8,9],superv_base_decid:14,supervised_decid:9,symbolic_represent:14,systematic_search:12,tabl:0,tap_queri:5,test:15,test_abbe_descriptor:15,test_comp_descriptor:15,test_connector:15,test_data_analysi:15,test_filt:15,test_params_estim:15,tool:13,unsupervis:10,unsupervised_bas:14,util:[14,16],variogram_shape_descr:11,variogram_slope_descr:11,visual:13,vizier_tap_bas:5,welcom:0}})