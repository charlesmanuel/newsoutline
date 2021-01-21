if (self.CavalryLogger) { CavalryLogger.start_js(["3NW1A"]); }

__d("StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"ArchivedStoryCardDeleteResponsePayload",kind:"LinkedField",name:"archived_story_card_delete",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"deleted_archived_story_card_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_story_ids",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_story_cache_ids",storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"StoriesData",kind:"LinkedField",name:"stories_data",plural:!1,selections:[b,{alias:null,args:null,concreteType:"StoryHistoryContainer",kind:"LinkedField",name:"story_archive",plural:!1,selections:[b,{alias:null,args:null,concreteType:"StoryHistoryContainerToArchivedCardsConnection",kind:"LinkedField",name:"archived_cards",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryHistoryContainerToArchivedCardsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"node",plural:!1,selections:[b,{alias:null,args:null,kind:"ScalarField",name:"cache_id",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation",selections:b,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation",selections:b},params:{id:"2515920141820713",metadata:{},name:"StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:!1,kind:"LocalArgument",name:"enable_profile_story_consumption"},b={defaultValue:null,kind:"LocalArgument",name:"input"},c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"StoriesDeleteResponsePayload",kind:"LinkedField",name:"stories_delete",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"deleted_story_thread_ids",storageKey:null},{condition:"enable_profile_story_consumption",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"buckets",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c,{alias:null,args:null,kind:"ScalarField",name:"is_bucket_seen_by_viewer",storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"cache_id",storageKey:null}],storageKey:null}],storageKey:null}]}],storageKey:null}];return{fragment:{argumentDefinitions:[a,b],kind:"Fragment",metadata:null,name:"StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[b,a],kind:"Operation",name:"StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation",selections:c},params:{id:"2872197619473557",metadata:{},name:"StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("StoriesMuteStoryOptionMenuItem_StoriesMuteMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"UserCameraPostStoryUnfollowResponsePayload",kind:"LinkedField",name:"user_camera_post_story_unfollow",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"client_mutation_id",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"StoriesMuteStoryOptionMenuItem_StoriesMuteMutation",selections:b,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"StoriesMuteStoryOptionMenuItem_StoriesMuteMutation",selections:b},params:{id:"2549227995122144",metadata:{},name:"StoriesMuteStoryOptionMenuItem_StoriesMuteMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("StoriesUnfollowPageOptionMenuItem_unfollowPageMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"PageUnlikeResponsePayload",kind:"LinkedField",name:"page_unlike",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"client_mutation_id",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"StoriesUnfollowPageOptionMenuItem_unfollowPageMutation",selections:b,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"StoriesUnfollowPageOptionMenuItem_unfollowPageMutation",selections:b},params:{id:"3544048432349200",metadata:{},name:"StoriesUnfollowPageOptionMenuItem_unfollowPageMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("StoriesSuspenseCardOptionMenu_card.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StoriesSuspenseCardOptionMenu_card",selections:[a,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"via",plural:!1,selections:[a],storageKey:null},{alias:null,args:null,concreteType:"StoryCardStoryInfo",kind:"LinkedField",name:"story_card_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"story_card_type",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null}],type:"Story",abstractKey:null}}();e.exports=a}),null);
__d("StoriesSuspenseCardOptionMenu_owner.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StoriesSuspenseCardOptionMenu_owner",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[a],type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:[b],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[a,b],type:"Group",abstractKey:null},{kind:"InlineFragment",selections:[b,{alias:null,args:null,kind:"ScalarField",name:"viewer_profile_permissions",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[b,{alias:null,args:null,kind:"ScalarField",name:"is_viewer_host",storageKey:null}],type:"Event",abstractKey:null}],type:"CameraPostBucketOwnerUnion",abstractKey:"__isCameraPostBucketOwnerUnion"}}();e.exports=a}),null);
__d("StoriesArchiveBucketDataContext",["React","emptyFunction"],(function(a,b,c,d,e,f){"use strict";a=b("React");c={archiveBucketData:{lowerBoundTime:"",nextDay:"",previousDay:"",storyArchiveID:"story_archive_ID",upperBoundTime:""},initialBucketID:"",setArchiveBucketData:b("emptyFunction")};d=a.createContext(c);e.exports=d}),null);
__d("StoriesArchiveCardStoreForBlue",[],(function(a,b,c,d,e,f){"use strict";a={DeletedStoryList:new Set(),SeenStoryList:new Set(),StoriesArchiveDataMap:new Map()};e.exports=a}),null);
__d("StoriesArchiveConstants",[],(function(a,b,c,d,e,f){"use strict";a={CONNECTION_NAME:"StoriesArchiveContentPaneRoot_archived_cards"};f.ARCHIVE=a;b={INITIAL_NEXTDAY:"initial_next_day",INITIAL_PREVIOUSDAY:"initial_previous_day"};f.BucketData=b}),null);
__d("StoryDeleteCardDialogBox",["fbt","useCometConfirmationDialog"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;function a(a){var c=a.mediaType,d=a.onDeleteConfirmClick,e=a.onHideConfirmationDialog,f=a.onOpenConfirmationDialog,h=a.storyOptionType;a=b("useCometConfirmationDialog")();var i=a[0];a[1];var j=function(){var a;switch(((a=c)!=null?a:"").toUpperCase()){case"PHOTO":return g._("Delete this photo from your story?");case"VIDEO":return g._("Delete this video from your story?");default:return g._("Delete this from your story?")}},k=function(){var a;switch(((a=c)!=null?a:"").toUpperCase()){case"PHOTO":return g._("Delete Photo?");case"VIDEO":return g._("Delete Video?");default:return g._("Delete?")}};a=function(){var a;switch(((a=c)!=null?a:"").toUpperCase()){case"PHOTO":return g._("Delete photo");case"VIDEO":return g._("Delete video");default:return g._("Delete")}};var l=function(){i({body:j(),confirm:g._("Delete"),title:k()},d,function(){e&&e()}),f(h)};return{handleDeleteClick:l,primaryText:a()}}}),null);
__d("StoriesArchiveDeleteCardOptionMenuItem.react",["ix","CometMenuItem.react","CometRelay","React","StoriesArchiveBucketDataContext","StoriesArchiveCardStoreForBlue","StoriesArchiveConstants","StoriesEnums","StoriesLoggerContext","StoriesSuspenseContuxActionsContext","StoryDeleteCardDialogBox","fbicon","relay-runtime","StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j=h!==void 0?h:h=b("StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation.graphql");function a(a){var c=b("CometRelay").useRelayEnvironment(),d=i.useContext(b("StoriesSuspenseContuxActionsContext")),e=d.handleCardDeletion;d=i.useContext(b("StoriesLoggerContext"));var f=d.logger,h=a.cardID;d=a.mediaType;var k=a.onHideConfirmationDialog;a=a.onOpenConfirmationDialog;var l=i.useContext(b("StoriesArchiveBucketDataContext"));l=l.archiveBucketData;var m=l.lowerBoundTime,n=l.storyArchiveID,o=l.upperBoundTime;l=function(){f.deleteLog();k();var a=function(a){a=a.get(n);if(a==null)return;a=b("relay-runtime").ConnectionHandler.getConnection(a,b("StoriesArchiveConstants").ARCHIVE.CONNECTION_NAME,{after_time:m,before_time:o,orderby:["local_creation_time_asc"]});if(a==null)return;b("relay-runtime").ConnectionHandler.deleteNode(a,h);var c=a.getLinkedRecords("edges")||[];a.setValue(c.length,"count")},d=function(b){a(b)};b("CometRelay").commitMutation(c,{mutation:j,optimisticUpdater:d,updater:d,variables:{input:{archived_story_card_id:h}}});b("StoriesArchiveCardStoreForBlue").DeletedStoryList.add(h);e()};d=b("StoryDeleteCardDialogBox")({mediaType:d,onDeleteConfirmClick:l,onHideConfirmationDialog:k,onOpenConfirmationDialog:a,storyOptionType:b("StoriesEnums").STORIES_OPTION_TYPES.MUTE_CARD_OWNER});l=d.handleDeleteClick;a=d.primaryText;return i.jsx(b("CometMenuItem.react"),{icon:b("fbicon")._(g("483829"),20),onClick:l,primaryText:a},"delete")}}),null);
__d("StoriesDeleteCardOptionMenuItem.react",["ix","CometMenuItem.react","CometRelay","React","StoriesEnums","StoriesLoggerContext","StoriesSuspenseContuxActionsContext","StoryDeleteCardDialogBox","fbicon","relay-runtime","StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j=h!==void 0?h:h=b("StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation.graphql");function a(a){var c=i.useContext(b("StoriesLoggerContext")),d=c.logger,e=b("CometRelay").useRelayEnvironment();c=i.useContext(b("StoriesSuspenseContuxActionsContext"));var f=c.handleCardDeletion,h=a.bucketID,k=a.cardID;c=a.mediaType;var l=a.onHideConfirmationDialog;a=a.onOpenConfirmationDialog;var m=function(){d.deleteLog();l();var a=function(a){a=h!=null?a.get(h):null;if(!a)return;var c=a.getLinkedRecord("unified_stories");if(c==null)return;b("relay-runtime").ConnectionHandler.deleteNode(c,k);var d=c.getLinkedRecords("edges")||[];c.setValue(d.length,"count");c.setValue(d.length===0,"is_empty");d.length===0&&a.setValue(null,"thumbnail_story_to_show")},c=function(b){a(b)};b("CometRelay").commitMutation(e,{mutation:j,optimisticUpdater:c,updater:c,variables:{input:{story_ids:[k]}}});f()};c=b("StoryDeleteCardDialogBox")({mediaType:c,onDeleteConfirmClick:m,onHideConfirmationDialog:l,onOpenConfirmationDialog:a,storyOptionType:b("StoriesEnums").STORIES_OPTION_TYPES.MUTE_CARD_OWNER});m=c.handleDeleteClick;a=c.primaryText;return i.jsx(b("CometMenuItem.react"),{icon:b("fbicon")._(g("483829"),20),onClick:m,primaryText:a,testid:void 0},"delete")}}),null);
__d("useStoriesReportBug",["requireCond","cr:1083606"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1083606")}),null);
__d("StoriesFileBugOptionMenuItem.react",["ix","fbt","CometMenuItem.react","React","fbicon","useStoriesReportBug"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i=b("React");function a(a){a=b("useStoriesReportBug")(a);var c=a[0];a=a[1];return i.jsx(b("CometMenuItem.react"),{icon:b("fbicon")._(g("530512"),20),onClick:c,primaryText:h._("Something isn't working"),ref:a},"bug")}}),null);
__d("StoriesInspectStoryOptionMenuItem.react",["ix","fbt","CometMenuItem.react","React","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i=b("React");function a(a){return i.jsx(b("CometMenuItem.react"),{href:"https://our.intern.facebook.com/intern/fb_stories/inspector/?id="+a.cardID,icon:b("fbicon")._(g("912341"),20),primaryText:h._("[FB Only] Open in Stories Inspector Tool"),target:"_blank"})}}),null);
__d("useStoriesBucketDelete",["React","relay-runtime","useStoriesBucketsConnectionArguments"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a,c){var d=b("useStoriesBucketsConnectionArguments")(),e=d.connectionArguments,f=d.connectionName,h=g.useCallback(function(d){if(c==null)return;if(a!=null){var g=d.get(a);if(g!=null){g=b("relay-runtime").ConnectionHandler.getConnection(g,f,e);g!=null&&b("relay-runtime").ConnectionHandler.deleteNode(g,c)}}d["delete"](c)},[a,c,e,f]);d=g.useCallback(function(a){h(a)},[h]);return d}}),null);
__d("StoriesMuteStoryOptionMenuItem.react",["ix","fbt","CometMenuItem.react","CometRelay","React","StoriesEnums","fbicon","useCometConfirmationDialog","useStoriesBucketDelete","StoriesMuteStoryOptionMenuItem_StoriesMuteMutation.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React"),k=i!==void 0?i:i=b("StoriesMuteStoryOptionMenuItem_StoriesMuteMutation.graphql");function a(a){var c=b("CometRelay").useRelayEnvironment(),d=b("useCometConfirmationDialog")(),e=d[0];d[1];var f=h._("Mute {bucket_owner_name}?",[h._param("bucket_owner_name",a.ownerName)]),i=function(){switch(a.storyCardType){case b("StoriesEnums").STORY_CARD_TYPES.PAGE_STORY:return h._("You'll stop seeing their story but can still see posts from this Page.");case b("StoriesEnums").STORY_CARD_TYPES.EVENT_STORY:return h._("You'll stop seeing this story but can still see event updates.");case b("StoriesEnums").STORY_CARD_TYPES.GROUP_STORY:return h._("You'll stop seeing this story but will stay in the group.")}return h._("You'll stop seeing their story but will remain friends.")},l=b("useStoriesBucketDelete")(a.actorID,a.bucketID),m=function(){a.onHideConfirmationDialog&&a.onHideConfirmationDialog();var d=a.ownerID;if(d==null)return;b("CometRelay").commitMutation(c,{mutation:k,optimisticUpdater:l,updater:l,variables:{input:{should_unfollow_user_story:!0,user_id:d}}})};d=function(){e({body:i(),confirm:h._("Mute"),title:f},m,function(){a.onHideConfirmationDialog&&a.onHideConfirmationDialog()}),a.onOpenConfirmationDialog(b("StoriesEnums").STORIES_OPTION_TYPES.MUTE_CARD_OWNER)};var n=function(){var b;b=(b=a.ownerName)!=null?b:"";return h._("Mute {bucket_owner_name}",[h._param("bucket_owner_name",b)])};return j.jsx(b("CometMenuItem.react"),{icon:b("fbicon")._(g("577043"),20),onClick:d,primaryText:n()},"mute_bucket_owner")}}),null);
__d("StoriesReportOptionMenuItem.react",["ix","fbt","CometMenuItem.react","JSResourceForInteraction","ProfileCometFeaturedHighlightsStrings","React","StoriesBehaviorHelpContext","StoriesEnums","StoriesPauseReasons","StoriesUtils","fbicon","requireCond","setTimeout","cr:764837","cr:962207","cr:885544","cr:885545","useCometLazyDialog"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i=b("React"),j="direct_messaging",k=b("JSResourceForInteraction")("CometFRX_DEPRECATED.react").__setRef("StoriesReportOptionMenuItem.react");function a(a){var c=a.cardID,d=a.setPause,e=i.useRef();a=b("useCometLazyDialog")(k);var f=a[0];a=i.useContext(b("StoriesBehaviorHelpContext")).getBucketType();a=a===b("StoriesEnums").STORY_CARD_TYPES.HIGHLIGHTED_STORY?b("ProfileCometFeaturedHighlightsStrings").REPORT_ITEM:h._("Give Feedback or Report Story");i.useEffect(function(){if(b("cr:764837")===null)return;var a=[b("cr:764837").subscribe("lwf/frx/dialogClosed",function(){d(!1,b("StoriesPauseReasons").REPORT_DIALOG)}),b("cr:764837").subscribe("frx/search/dialogClosed",function(){d(!1,b("StoriesPauseReasons").REPORT_DIALOG)})];return function(){b("setTimeout")(function(){a.map(function(a){return a.unsubscribe()}),a=[]},10)}});var l=b("StoriesUtils").cardID2ThreadID(c);c=i.useCallback(function(){if(b("cr:885545")&&b("cr:962207")&&b("cr:885544")){var a=b("cr:885545").withEntReportable({entry_point:"report_button",reportable_ent_token:l,story_location:j});d(!0,b("StoriesPauseReasons").REPORT_DIALOG);a=new(b("cr:885544"))().setURI(a);a.setRelativeTo(e.current);b("cr:962207").send(a)}},[d,l]);var m=i.useCallback(function(){d(!0,b("StoriesPauseReasons").REPORT_DIALOG),f({entryPoint:"REPORT_BUTTON",id:l,location:j},function(){d(!1,b("StoriesPauseReasons").REPORT_DIALOG)})},[f,d,l]);return i.jsx(b("CometMenuItem.react"),{icon:b("fbicon")._(g("490583"),20),onClick:b("cr:885545")&&b("cr:962207")&&b("cr:885544")?c:m,primaryText:a},"report")}}),null);
__d("StoriesUnfollowPageOptionMenuItem.react",["ix","fbt","CometMenuItem.react","CometRelay","React","StoriesEnums","fbicon","useCometConfirmationDialog","useStoriesBucketDelete","StoriesUnfollowPageOptionMenuItem_unfollowPageMutation.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React"),k=i!==void 0?i:i=b("StoriesUnfollowPageOptionMenuItem_unfollowPageMutation.graphql");function a(a){var c=b("CometRelay").useRelayEnvironment(),d=b("useCometConfirmationDialog")(),e=d[0];d[1];var f=h._("Unfollow {bucket_owner_name}?",[h._param("bucket_owner_name",a.ownerName)]),i=b("useStoriesBucketDelete")(a.actorID,a.bucketID),l=function(){a.onHideConfirmationDialog&&a.onHideConfirmationDialog();var d=a.ownerID;if(d==null)return;b("CometRelay").commitMutation(c,{mutation:k,optimisticUpdater:i,updater:i,variables:{input:{page_id:d}}})};d=function(){e({body:h._("You'll stop seeing stories and posts from this page."),confirm:h._("Unfollow"),title:f},l,function(){a.onHideConfirmationDialog&&a.onHideConfirmationDialog()}),a.onOpenConfirmationDialog(b("StoriesEnums").STORIES_OPTION_TYPES.UNFOLLOW_PAGE)};var m=function(){var b;b=(b=a.ownerName)!=null?b:"";return h._("Unfollow {bucket_owner_name}",[h._param("bucket_owner_name",b)])};return j.jsx(b("CometMenuItem.react"),{icon:b("fbicon")._(g("578906"),20),onClick:d,primaryText:m()},"unfollow_page")}}),null);
__d("useStoriesReportCometBug",["React","StoriesPauseReasons","useCometReportBug"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=b("useCometReportBug")(),d=c[0];c=c[1];var e=g.useCallback(function(){a.setPause(!0,b("StoriesPauseReasons").BUG_DIALOG),d({initialProduct:"stories"},function(){a.setPause(!1,b("StoriesPauseReasons").BUG_DIALOG)})},[a,d]),f=g.useCallback(function(){e()},[e]);return[f,c]}}),null);
__d("StoriesSuspenseCardOptionMenu.react",["CometMenu.react","CometRelay","React","StoriesActorContext","StoriesArchiveDeleteCardOptionMenuItem.react","StoriesBehaviorHelpContext","StoriesDeleteCardOptionMenuItem.react","StoriesEnums","StoriesFileBugOptionMenuItem.react","StoriesGating","StoriesInspectStoryOptionMenuItem.react","StoriesLoggerSession","StoriesLoggingConstants","StoriesMuteStoryOptionMenuItem.react","StoriesReportOptionMenuItem.react","StoriesUnfollowPageOptionMenuItem.react","gkx","StoriesSuspenseCardOptionMenu_card.graphql","StoriesSuspenseCardOptionMenu_owner.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=b("React"),j=function(){function a(){this.$1=[]}var b=a.prototype;b.add=function(a,b){(b!=null?b:!0)&&this.$1.push(a);return this};b.done=function(){var a;return(a=this.$1)!=null?a:[]};return a}();function a(a){var c=b("CometRelay").useFragment(g!==void 0?g:g=b("StoriesSuspenseCardOptionMenu_card.graphql"),a.card),d=b("CometRelay").useFragment(h!==void 0?h:h=b("StoriesSuspenseCardOptionMenu_owner.graphql"),a.owner),e=i.useContext(b("StoriesActorContext")),f=e.actorID,k=c==null?void 0:c.id;if(k==null)return null;function l(){var a=c==null?void 0:c.attachments;return a&&(a==null?void 0:a.length)>0?(a=a[0].media)==null?void 0:a.__typename:null}function m(){var a;return c==null?void 0:(a=c.story_card_info)==null?void 0:a.story_card_type}function n(){var a;if(d==null)return!1;a=c==null?void 0:(a=c.via)==null?void 0:a.id;return a===f||o()}function o(){if(d==null)return!1;var a=d.viewer_profile_permissions!=null&&d.viewer_profile_permissions.includes("EDIT_PROFILE");return d.id===f||a||!!d.is_viewer_host}function p(){var c=b("StoriesLoggerSession").getOpenViewerSource(),e=i.useContext(b("StoriesBehaviorHelpContext")).getBucketType(),g=null;c===b("StoriesLoggingConstants").ACTION_SOURCE.ARCHIVE?g=b("StoriesArchiveDeleteCardOptionMenuItem.react"):g=b("StoriesDeleteCardOptionMenuItem.react");return o()&&e===b("StoriesEnums").STORY_CARD_TYPES.HIGHLIGHTED_STORY?null:new j().add(i.jsx(b("StoriesMuteStoryOptionMenuItem.react"),{actorID:f,bucketID:a.bucketID,onHideConfirmationDialog:a.onHideOptionConfirmationDialog,onOpenConfirmationDialog:a.onShowOptionConfirmationDialog,ownerID:d==null?void 0:d.id,ownerName:d==null?void 0:d.name,storyCardType:m()},"mute_owner"),!o()&&e!==b("StoriesEnums").STORY_CARD_TYPES.HIGHLIGHTED_STORY).add(i.jsx(b("StoriesUnfollowPageOptionMenuItem.react"),{actorID:f,bucketID:a.bucketID,onHideConfirmationDialog:a.onHideOptionConfirmationDialog,onOpenConfirmationDialog:a.onShowOptionConfirmationDialog,ownerID:d==null?void 0:d.id,ownerName:d==null?void 0:d.name},"unfollow_page"),!o()&&m()===b("StoriesEnums").STORY_CARD_TYPES.PAGE_STORY&&b("StoriesGating").shouldShowPageUnfollowOption()).add(i.jsx(b("StoriesReportOptionMenuItem.react"),{cardID:k,setPause:a.setPause},"report"),!n()).add(i.jsx(g,{bucketID:a.bucketID,cardID:k,mediaType:l(),onHideConfirmationDialog:a.onHideOptionConfirmationDialog,onOpenConfirmationDialog:a.onShowOptionConfirmationDialog},"delete"),n()).add(i.jsx(b("StoriesFileBugOptionMenuItem.react"),{setPause:a.setPause},"bug")).add(i.jsx(b("StoriesInspectStoryOptionMenuItem.react"),{cardID:k},"inspect"),b("gkx")("807313")).done()}return i.jsx("div",{"data-testid":void 0,children:i.jsx(b("CometMenu.react"),{withArrow:!0,children:p()})})}}),null);
__d("FBStoriesQPLUtils",["QuickPerformanceLogger","Run"],(function(a,b,c,d,e,f){"use strict";f.start=a;f.end=c;function g(a){a.navigationStart?b("QuickPerformanceLogger").markerStartFromNavStart(a.qplMarker):b("QuickPerformanceLogger").markerStart(a.qplMarker,0),b("Run").onUnload(function(){b("QuickPerformanceLogger").markerEnd(a.qplMarker,4)})}function a(a){g(a)}function c(a){b("QuickPerformanceLogger").markerEnd(a.qplMarker,a.action?a.action:2)}}),null);