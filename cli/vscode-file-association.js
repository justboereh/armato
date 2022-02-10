const instancesExt = [
  "*.API Reference",
  "*.ABTestService",
  "*.Accessory",
  "*.Accoutrement",
  "*.Actor",
  "*.AdService",
  "*.AdvancedDragger",
  "*.AlignOrientation",
  "*.AlignPosition",
  "*.AnalysticsSettings",
  "*.AnalyticsService",
  "*.AngularVelocity",
  "*.Animation",
  "*.AnimationController",
  "*.AnimationTrack",
  "*.Animator",
  "*.AntiAddictionService",
  "*.AppStorageService",
  "*.AppUpdateService",
  "*.ArcHandles",
  "*.AssetCounterService",
  "*.AssetDeliveryProxy",
  "*.AssetImportService",
  "*.AssetManagerService",
  "*.AssetService",
  "*.Atmosphere",
  "*.Attachment",
  "*.AvatarEditorService",
  "*.AvatarImportService",
  "*.Backpack",
  "*.BackpackItem",
  "*.BadgeService",
  "*.BallSocketConstraint",
  "*.BasePart",
  "*.BasePlayerGui",
  "*.BaseScript",
  "*.BaseWrap",
  "*.Beam",
  "*.BevelMesh",
  "*.BillboardGui",
  "*.BinaryStringValue",
  "*.BindableEvent",
  "*.BindableFunction",
  "*.BlockMesh",
  "*.BloomEffect",
  "*.BlurEffect",
  "*.BodyAngularVelocity",
  "*.BodyColors",
  "*.BodyForce",
  "*.BodyGyro",
  "*.BodyMover",
  "*.BodyPosition",
  "*.BodyThrust",
  "*.BodyVelocity",
  "*.Bone",
  "*.BoolValue",
  "*.BoxHandleAdornment",
  "*.Breakpoint",
  "*.BreakpointManager",
  "*.BrickColorValue",
  "*.BrowserService",
  "*.BulkImportService",
  "*.Button",
  "*.ButtonBindingWidget",
  "*.CacheableContentProvider",
  "*.CalloutService",
  "*.Camera",
  "*.CanvasGroup",
  "*.CatalogPages",
  "*.CFrameValue",
  "*.ChangeHistoryService",
  "*.CharacterAppearance",
  "*.CharacterMesh",
  "*.Chat",
  "*.ChorusSoundEffect",
  "*.ClickDetector",
  "*.ClientReplicator",
  "*.Clothing",
  "*.Clouds",
  "*.ClusterPacketCache",
  "*.CollectionService",
  "*.Color3Value",
  "*.ColorCorrectionEffect",
  "*.CommandInstance",
  "*.CommandService",
  "*.CompressorSoundEffect",
  "*.ConeHandleAdornment",
  "*.Configuration",
  "*.ConfigureServerService",
  "*.Constraint",
  "*.ContentProvider",
  "*.ContextActionService",
  "*.Controller",
  "*.ControllerService",
  "*.CookiesService",
  "*.CoreGui",
  "*.CorePackages",
  "*.CoreScript",
  "*.CoreScriptSyncService",
  "*.CornerWedgePart",
  "*.CSGDictionaryService",
  "*.CurveAnimation",
  "*.CustomEvent",
  "*.CustomEventReceiver",
  "*.CylinderHandleAdornment",
  "*.CylinderMesh",
  "*.CylindricalConstraint",
  "*.DataModel",
  "*.DataModelMesh",
  "*.DataModelSession",
  "*.DataStore",
  "*.DataStoreIncrementOptions",
  "*.DataStoreInfo",
  "*.DataStoreKey",
  "*.DataStoreKeyInfo",
  "*.DataStoreKeyPages",
  "*.DataStoreKeyVersionInfo",
  "*.DataStoreListingPages",
  "*.DataStoreObjectVersionInfo",
  "*.DataStoreOptions",
  "*.DataStorePages",
  "*.DataStoreService",
  "*.DataStoreSetOptions",
  "*.DataStoreVersionPages",
  "*.Debris",
  "*.DebuggablePlugin",
  "*.DebuggerBreakpoint",
  "*.DebuggerConnection",
  "*.DebuggerConnectionManager",
  "*.DebuggerManager",
  "*.DebuggerUIService",
  "*.DebuggerVariable",
  "*.DebuggerWatch",
  "*.DebugSettings",
  "*.Decal",
  "*.DepthOfFieldEffect",
  "*.Dialog",
  "*.DialogChoice",
  "*.DistortionSoundEffect",
  "*.DockWidgetPluginGui",
  "*.DoubleConstrainedValue",
  "*.DraftsService",
  "*.Dragger",
  "*.DraggerService",
  "*.DynamicRotate",
  "*.EchoSoundEffect",
  "*.EmotesPages",
  "*.EqualizerSoundEffect",
  "*.EulerRotationCurve",
  "*.EventIngestService",
  "*.Explosion",
  "*.FaceControls",
  "*.FaceInstance",
  "*.Feature",
  "*.File",
  "*.FileMesh",
  "*.Fire",
  "*.Flag",
  "*.FlagStand",
  "*.FlagStandService",
  "*.FlangeSoundEffect",
  "*.FloatCurve",
  "*.FloorWire",
  "*.FlyweightService",
  "*.Folder",
  "*.ForceField",
  "*.FormFactorPart",
  "*.Frame",
  "*.FriendPages",
  "*.FriendService",
  "*.FunctionalTest",
  "*.GamepadService",
  "*.GamePassService",
  "*.GameSettings",
  "*.GenericSettings",
  "*.Geometry",
  "*.GetDataStoreOptions",
  "*.GlobalDataStore",
  "*.GlobalSettings",
  "*.Glue",
  "*.GoogleAnalyticsConfiguration",
  "*.GroupService",
  "*.GuiBase",
  "*.GuiBase2d",
  "*.GuiBase3d",
  "*.GuiButton",
  "*.GuidRegistryService",
  "*.GuiItem",
  "*.GuiLabel",
  "*.GuiMain",
  "*.GuiObject",
  "*.GuiRoot",
  "*.GuiService",
  "*.HandleAdornment",
  "*.Handles",
  "*.HandlesBase",
  "*.HapticService",
  "*.Hat",
  "*.HeightmapImporterService",
  "*.Highlight",
  "*.HingeConstraint",
  "*.Hint",
  "*.Hole",
  "*.Hopper",
  "*.HopperBin",
  "*.HttpRbxApiService",
  "*.HttpRequest",
  "*.HttpService",
  "*.Humanoid",
  "*.HumanoidController",
  "*.HumanoidDescription",
  "*.ILegacyStudioBridge",
  "*.ImageButton",
  "*.ImageHandleAdornment",
  "*.ImageLabel",
  "*.ImporterBaseSettings",
  "*.ImporterGroupSettings",
  "*.ImporterJointSettings",
  "*.ImporterMeshSettings",
  "*.ImporterRootSettings",
  "*.ImporterTextureSettings",
  "*.IncrementalPatchBuilder",
  "*.InputObject",
  "*.InsertService",
  "*.Instance",
  "*.InstanceAdornment",
  "*.InstancePacketCache",
  "*.IntConstrainedValue",
  "*.InternalContainer",
  "*.InternalSyncItem",
  "*.InternalSyncService",
  "*.IntValue",
  "*.InventoryPages",
  "*.IXPService",
  "*.JointInstance",
  "*.JointsService",
  "*.KeyboardService",
  "*.Keyframe",
  "*.KeyframeMarker",
  "*.KeyframeSequence",
  "*.KeyframeSequenceProvider",
  "*.LanguageService",
  "*.LayerCollector",
  "*.LegacyStudioBridge",
  "*.Light",
  "*.Lighting",
  "*.LinearVelocity",
  "*.LineForce",
  "*.LineHandleAdornment",
  "*.LocalAsset",
  "*.LocalizationService",
  "*.LocalizationTable",
  "*.LocalScript",
  "*.LocalStorageService",
  "*.LoginService",
  "*.LogService",
  "*.LuaSettings",
  "*.LuaSourceContainer",
  "*.LuaWebService",
  "*.ManualGlue",
  "*.ManualSurfaceJointInstance",
  "*.ManualWeld",
  "*.MarketplaceService",
  "*.MaterialService",
  "*.MaterialVariant",
  "*.MDIInstance",
  "*.MemoryStoreQueue",
  "*.MemoryStoreService",
  "*.MemoryStoreSortedMap",
  "*.MemStorageConnection",
  "*.MemStorageService",
  "*.MeshContentProvider",
  "*.MeshPart",
  "*.Message",
  "*.MessageBusConnection",
  "*.MessageBusService",
  "*.MessagingService",
  "*.MetaBreakpoint",
  "*.MetaBreakpointContext",
  "*.Model",
  "*.ModuleScript",
  "*.Motor",
  "*.Motor6D",
  "*.MotorFeature",
  "*.Mouse",
  "*.MouseService",
  "*.MultipleDocumentInterfaceInstance",
  "*.NegateOperation",
  "*.NetworkClient",
  "*.NetworkMarker",
  "*.NetworkPeer",
  "*.NetworkReplicator",
  "*.NetworkServer",
  "*.NetworkSettings",
  "*.NoCollisionConstraint",
  "*.NonReplicatedCSGDictionaryService",
  "*.NotificationService",
  "*.NumberPose",
  "*.NumberValue",
  "*.ObjectValue",
  "*.OrderedDataStore",
  "*.OutfitPages",
  "*.PackageLink",
  "*.PackageService",
  "*.Pages",
  "*.Pants",
  "*.ParabolaAdornment",
  "*.Part",
  "*.PartAdornment",
  "*.ParticleEmitter",
  "*.PartOperation",
  "*.PartOperationAsset",
  "*.Path",
  "*.PathfindingModifier",
  "*.PathfindingService",
  "*.PausedState",
  "*.PausedStateBreakpoint",
  "*.PausedStateException",
  "*.PermissionsService",
  "*.PhysicsPacketCache",
  "*.PhysicsService",
  "*.PhysicsSettings",
  "*.PitchShiftSoundEffect",
  "*.Plane",
  "*.Platform",
  "*.Player",
  "*.PlayerEmulatorService",
  "*.PlayerGui",
  "*.PlayerMouse",
  "*.Players",
  "*.PlayerScripts",
  "*.Plugin",
  "*.PluginAction",
  "*.PluginDebugService",
  "*.PluginDragEvent",
  "*.PluginGui",
  "*.PluginGuiService",
  "*.PluginManager",
  "*.PluginManagerInterface",
  "*.PluginMenu",
  "*.PluginMouse",
  "*.PluginPolicyService",
  "*.PluginToolbar",
  "*.PluginToolbarButton",
  "*.PointLight",
  "*.PointsService",
  "*.PolicyService",
  "*.Pose",
  "*.PoseBase",
  "*.PostEffect",
  "*.PrismaticConstraint",
  "*.ProcessInstancePhysicsService",
  "*.ProximityPrompt",
  "*.ProximityPromptService",
  "*.PublishService",
  "*.PVAdornment",
  "*.PVInstance",
  "*.QWidgetPluginGui",
  "*.RayValue",
  "*.RbxAnalyticsService",
  "*.ReflectionMetadata",
  "*.ReflectionMetadataCallbacks",
  "*.ReflectionMetadataClass",
  "*.ReflectionMetadataClasses",
  "*.ReflectionMetadataEnum",
  "*.ReflectionMetadataEnumItem",
  "*.ReflectionMetadataEnums",
  "*.ReflectionMetadataEvents",
  "*.ReflectionMetadataFunctions",
  "*.ReflectionMetadataItem",
  "*.ReflectionMetadataMember",
  "*.ReflectionMetadataProperties",
  "*.ReflectionMetadataYieldFunctions",
  "*.RemoteDebuggerServer",
  "*.RemoteEvent",
  "*.RemoteFunction",
  "*.RenderingTest",
  "*.RenderSettings",
  "*.ReplicatedFirst",
  "*.ReplicatedScriptService",
  "*.ReplicatedStorage",
  "*.ReverbSoundEffect",
  "*.RobloxPluginGuiService",
  "*.RobloxReplicatedStorage",
  "*.RocketPropulsion",
  "*.RodConstraint",
  "*.RootInstance",
  "*.RopeConstraint",
  "*.Rotate",
  "*.RotateP",
  "*.RotateV",
  "*.RotationCurve",
  "*.RunningAverageItemDouble",
  "*.RunningAverageItemInt",
  "*.RunningAverageTimeIntervalItem",
  "*.RunService",
  "*.RuntimeScriptService",
  "*.Scale9Frame",
  "*.ScreenGui",
  "*.Script",
  "*.ScriptChangeService",
  "*.ScriptContext",
  "*.ScriptDebugger",
  "*.ScriptRef",
  "*.ScriptRefId",
  "*.ScriptRefPath",
  "*.ScriptService",
  "*.ScrollingFrame",
  "*.Seat",
  "*.Selection",
  "*.SelectionBox",
  "*.SelectionLasso",
  "*.SelectionPartLasso",
  "*.SelectionPointLasso",
  "*.SelectionSphere",
  "*.ServerReplicator",
  "*.ServerScriptService",
  "*.ServerStorage",
  "*.ServiceProvider",
  "*.SessionService",
  "*.Shirt",
  "*.ShirtGraphic",
  "*.SkateboardController",
  "*.SkateboardPlatform",
  "*.Skin",
  "*.Sky",
  "*.SlidingBallConstraint",
  "*.Smoke",
  "*.Snap",
  "*.SocialService",
  "*.SolidModelContentProvider",
  "*.Sound",
  "*.SoundEffect",
  "*.SoundGroup",
  "*.SoundService",
  "*.Sparkles",
  "*.SpawnerService",
  "*.SpawnLocation",
  "*.Speaker",
  "*.SpecialMesh",
  "*.SphereHandleAdornment",
  "*.SpotLight",
  "*.SpringConstraint",
  "*.StackFrame",
  "*.StandalonePluginScripts",
  "*.StandardPages",
  "*.StarterCharacterScripts",
  "*.StarterGear",
  "*.StarterGui",
  "*.StarterPack",
  "*.StarterPlayer",
  "*.StarterPlayerScripts",
  "*.Stats",
  "*.StatsItem",
  "*.Status",
  "*.StopWatchReporter",
  "*.StringValue",
  "*.Studio",
  "*.StudioAssetService",
  "*.StudioData",
  "*.StudioDeviceEmulatorService",
  "*.StudioScriptDebugEventListener",
  "*.StudioService",
  "*.StudioTheme",
  "*.SunRaysEffect",
  "*.SurfaceAppearance",
  "*.SurfaceGui",
  "*.SurfaceLight",
  "*.SurfaceSelection",
  "*.TaskScheduler",
  "*.Team",
  "*.Teams",
  "*.TeleportAsyncResult",
  "*.TeleportOptions",
  "*.TeleportService",
  "*.TemporaryCageMeshProvider",
  "*.Terrain",
  "*.TerrainRegion",
  "*.TestService",
  "*.TextBox",
  "*.TextButton",
  "*.TextChannel",
  "*.TextChatService",
  "*.TextFilterResult",
  "*.TextLabel",
  "*.TextService",
  "*.TextSource",
  "*.Texture",
  "*.ThirdPartyUserService",
  "*.ThreadState",
  "*.TimerService",
  "*.ToastNotificationService",
  "*.Tool",
  "*.Toolbar",
  "*.ToolboxService",
  "*.Torque",
  "*.TorsionSpringConstraint",
  "*.TotalCountTimeIntervalItem",
  "*.TouchInputService",
  "*.TouchTransmitter",
  "*.TracerService",
  "*.Trail",
  "*.Translator",
  "*.TremoloSoundEffect",
  "*.TriangleMeshPart",
  "*.TrussPart",
  "*.Tween",
  "*.TweenBase",
  "*.TweenService",
  "*.UGCValidationService",
  "*.UIAspectRatioConstraint",
  "*.UIBase",
  "*.UIComponent",
  "*.UIConstraint",
  "*.UICorner",
  "*.UIGradient",
  "*.UIGridLayout",
  "*.UIGridStyleLayout",
  "*.UIInlineLayout",
  "*.UILayout",
  "*.UIListLayout",
  "*.UIPadding",
  "*.UIPageLayout",
  "*.UIScale",
  "*.UISizeConstraint",
  "*.UIStroke",
  "*.UITableLayout",
  "*.UITextSizeConstraint",
  "*.UnionOperation",
  "*.UniversalConstraint",
  "*.UnvalidatedAssetService",
  "*.UserGameSettings",
  "*.UserInputService",
  "*.UserService",
  "*.UserSettings",
  "*.UserStorageService",
  "*.ValueBase",
  "*.Vector3Curve",
  "*.Vector3Value",
  "*.VectorForce",
  "*.VehicleController",
  "*.VehicleSeat",
  "*.VelocityMotor",
  "*.VersionControlService",
  "*.VideoFrame",
  "*.ViewportFrame",
  "*.VirtualInputManager",
  "*.VirtualUser",
  "*.Visit",
  "*.VoiceChannel",
  "*.VoiceChatInternal",
  "*.VoiceChatService",
  "*.VoiceSource",
  "*.VRService",
  "*.WedgePart",
  "*.Weld",
  "*.WeldConstraint",
  "*.Workspace",
  "*.WorldModel",
  "*.WorldRoot",
  "*.WrapLayer",
  "*.WrapTarget",
];
const scriptsExt = ["*.ModuleScript", "*.LocalScript", "*.Script"];
const { existsSync, writeFileSync } = require("fs");
const { createInterface } = require("readline");
const a =
  (process.env.APPDATA ||
    (process.platform === "darwin"
      ? process.env.HOME + "/Library/Preferences"
      : process.env.HOME + "/.local/share")) + "/Code/User/settings.json";
if (!existsSync(a)) process.exit();
const s = require(a);
createInterface(process.stdin, process.stdout).question(
  `
  Remove file associations for Roblox instances (y/N)? `,
  (no) => {
    console.log(no);
    if (['n', ''].includes(no.trim().toLowerCase())) {
      for (const e of scriptsExt) {
        s["files.associations"][e] = "lua";
      }
      for (const e of instancesExt) {
        s["files.associations"][e] = "yml";
      }
      writeFileSync(a, JSON.stringify(s));
      process.exit();
    }
    for (const e of [...instancesExt, ...scriptsExt]) {
      if (s["files.associations"][e]) {
        delete s["files.associations"][e];
      }
    }
    writeFileSync(a, JSON.stringify(s));
    process.exit();
  }
);
