import { useTranslation } from '../hooks/useTranslation';

function MoreInfo() {
    const { t } = useTranslation();
    return (
        <>
            <div className="flex flex-col justify-center align-middle font-light text-center">
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:grid-cols-3">
                        <div className=" md:p-8 flex flex-col text-start xl:border-r-2 text-tertiary">
                            <h1 className="md:text-5xl pb-4 pt-4 font-poppins text-3xl text-primary cursor-default">{t('moreInfo.relevantSubjects')}</h1>
                            <ul className="list-disc ml-5 space-y-5">
                                <li className="md:text-3xl text-xl cursor-default">{t('moreInfo.subjects.programming')}</li>
                                <li className="md:text-3xl text-xl cursor-default">{t('moreInfo.subjects.database')}</li>
                                <li className="md:text-3xl text-xl cursor-default">{t('moreInfo.subjects.softwareEngineering')}</li>
                                <li className="md:text-3xl text-xl cursor-default">{t('moreInfo.subjects.dataIntegration')}</li>
                                <li className="md:text-3xl text-xl cursor-default">{t('moreInfo.subjects.machineLearning')}</li>
                                <li className="md:text-3xl text-xl cursor-default">{t('moreInfo.subjects.logicProgramming')}</li>
                                <li className="md:text-3xl text-xl cursor-default">{t('moreInfo.subjects.businessSystems')}</li>
                            </ul>
                        </div>
                        <div className=" md:p-8 flex flex-col text-start xl:border-r-2 border-t-2 lg:border-t-0 xl:border-t-0 text-tertiary">
                            <h1 className="md:text-5xl font-poppins text-3xl pb-4 pt-4 text-primary cursor-default">{t('moreInfo.currentSubjects')}</h1>
                            <ul className="list-disc ml-5 space-y-5">
                                <li className="md:text-3xl text-xl cursor-default">{t('moreInfo.subjects.operativeSystems')}</li>
                                <li className="md:text-3xl text-xl cursor-default">{t('moreInfo.subjects.computerNetworks')}</li>
                            </ul>
                        </div>
                        <div className=" md:p-8 flex flex-col text-start xl:border-t-0 border-t-2 text-tertiary">
                            <h1 className="md:text-5xl font-poppins text-3xl pb-4 pt-4 text-primary cursor-default">{t('moreInfo.hobbies')}</h1>
                            <ul className="list-disc ml-5 space-y-5">
                                <li className="md:text-3xl text-xl cursor-default">{t('moreInfo.hobbiesList.designWebsites')}</li>
                                <li className="md:text-3xl text-xl cursor-default">{t('moreInfo.hobbiesList.playFootball')}</li>
                                <li className="md:text-3xl text-xl cursor-default">{t('moreInfo.hobbiesList.goToGym')}</li>
                                <li className="md:text-3xl text-xl cursor-default">{t('moreInfo.hobbiesList.cook')}</li>
                            </ul>
                        </div>
                        <div className="col-span-1 lg:flex-row xl:col-span-3 md:p-8 text-start border-t-2 align-middle justify-center text-tertiary">
                            <h1 className="md:text-5xl font-poppins text-3xl pb-4 pt-4 text-primary cursor-default">{t('moreInfo.skills')}</h1>
                            <ul className="list-disc ml-5 space-y-5">
                                <li className="md:text-3xl text-xl cursor-default"><span className="font-semibold cursor-default">{t('moreInfo.skillsList.frontend')}</span> {t('moreInfo.skillsList.frontendTech')}</li>
                                <li className="md:text-3xl text-xl cursor-default"><span className="font-semibold cursor-default">{t('moreInfo.skillsList.backend')}</span> {t('moreInfo.skillsList.backendTech')}</li>
                                <li className="md:text-3xl text-xl cursor-default"><span className="font-semibold cursor-default">{t('moreInfo.skillsList.dataScience')}</span> {t('moreInfo.skillsList.dataScienceTech')}</li>
                                <li className="md:text-3xl text-xl cursor-default"><span className="font-semibold cursor-default">{t('moreInfo.skillsList.other')}</span> {t('moreInfo.skillsList.otherTech')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MoreInfo;